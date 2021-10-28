import BigNumber from 'bignumber.js'
import { BLOCKS_PER_YEAR, CNFT_PER_YEAR } from 'config'
import lpAprs from 'config/constants/lpAprs.json'



export const getPoolApr = (
  stakingTokenPrice: number,
  rewardTokenPrice: number,
  totalStaked: number,
  tokenPerBlock: number,
): number => {
  const totalRewardPricePerYear = new BigNumber(rewardTokenPrice).times(tokenPerBlock).times(BLOCKS_PER_YEAR)
  const totalStakingTokenInPool = new BigNumber(stakingTokenPrice).times(totalStaked)
  const apr = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)
  return apr.isNaN() || !apr.isFinite() ? null : apr.toNumber()
}

/**
 * Get farm APR value in %
 * @param poolWeight allocationPoint / totalAllocationPoint
 * @param cnftPriceUsd Cnft price in USD
 * @param poolLiquidityUsd Total pool liquidity in USD
 * @param farmAddress Farm Address
 * @returns Farm Apr
 */
export const getFarmApr = (
  poolWeight: BigNumber,
  cnftPriceUsd: BigNumber,
  poolLiquidityUsd: BigNumber,
  farmAddress: string,
): { cnftRewardsApr: number; lpRewardsApr: number } => {
  const yearlyCnftRewardAllocation = poolWeight ? poolWeight.times(CNFT_PER_YEAR) : new BigNumber(NaN)
  const cnftRewardsApr = yearlyCnftRewardAllocation.times(cnftPriceUsd).div(poolLiquidityUsd).times(100)
  let cnftRewardsAprAsNumber = null
  if (!cnftRewardsApr.isNaN() && cnftRewardsApr.isFinite()) {
    cnftRewardsAprAsNumber = cnftRewardsApr.toNumber()
  }
  const lpRewardsApr = lpAprs[farmAddress?.toLocaleLowerCase()] ?? 0
  return { cnftRewardsApr: cnftRewardsAprAsNumber, lpRewardsApr }
}

export default null
