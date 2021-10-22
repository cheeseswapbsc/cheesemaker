import poolsConfig from 'config/constants/pools'
import cnftChefABI from 'config/abi/cnftChef.json'
import cnftABI from 'config/abi/cnft.json'
import whtABI from 'config/abi/weth.json'
import { QuoteToken } from 'config/constants/types'
import multicall from 'utils/multicall'
import { getAddress, getWhtAddress } from 'utils/addressHelpers'
import BigNumber from 'bignumber.js'

export const fetchPoolsBlockLimits = async () => {
  const poolsWithEnd = poolsConfig.filter((p) => p.cnftId !== 0)
  const callsStartBlock = poolsWithEnd.map((poolConfig) => {
    return {
      address: getAddress(poolConfig.contractAddress),
      name: 'startBlock',
    }
  })
  const callsEndBlock = poolsWithEnd.map((poolConfig) => {
    return {
      address: getAddress(poolConfig.contractAddress),
      name: 'bonusEndBlock',
    }
  })

  const starts = await multicall(cnftChefABI, callsStartBlock)
  const ends = await multicall(cnftChefABI, callsEndBlock)

  return poolsWithEnd.map((cnftPoolConfig, index) => {
    const startBlock = starts[index]
    const endBlock = ends[index]
    return {
      cnftId: cnftPoolConfig.cnftId,
      startBlock: new BigNumber(startBlock).toJSON(),
      endBlock: new BigNumber(endBlock).toJSON(),
    }
  })
}

export const fetchPoolsTotalStatking = async () => {
  const nonHtPools = poolsConfig.filter((p) => p.stakingTokenName !== QuoteToken.HT)
  const htPool = poolsConfig.filter((p) => p.stakingTokenName === QuoteToken.HT)

  const callsNonHtPools = nonHtPools.map((poolConfig) => {
    return {
      address: poolConfig.stakingTokenAddress,
      name: 'balanceOf',
      params: [getAddress(poolConfig.contractAddress)],
    }
  })

  const callsHtPools = htPool.map((poolConfig) => {
    return {
      address: getWhtAddress(),
      name: 'balanceOf',
      params: [getAddress(poolConfig.contractAddress)],
    }
  })

  const nonHtPoolsTotalStaked = await multicall(cnftABI, callsNonHtPools)
  const htPoolsTotalStaked = await multicall(whtABI, callsHtPools)

  return [
    ...nonHtPools.map((p, index) => ({
      cnftId: p.cnftId,
      totalStaked: new BigNumber(nonHtPoolsTotalStaked[index]).toJSON(),
    })),
    ...htPool.map((p, index) => ({
      cnftId: p.cnftId,
      totalStaked: new BigNumber(htPoolsTotalStaked[index]).toJSON(),
    })),
  ]
}
