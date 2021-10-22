import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync, updateUserBalance, updateUserPendingReward } from 'state/actions'
import { cnfthHarvest, cnfthHarvestHt, harvest } from 'utils/callHelpers'
import { useMasterchef, useCnftChef } from './useContract'

export const useHarvest = (farmPid: number) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    const txHash = await harvest(masterChefContract, farmPid, account)
    dispatch(fetchFarmUserDataAsync(account))
    return txHash
  }, [account, dispatch, farmPid, masterChefContract])

  return { onReward: handleHarvest }
}

export const useAllHarvest = (farmPids: number[]) => {
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    const harvestPromises = farmPids.reduce((accum, pid) => {
      return [...accum, harvest(masterChefContract, pid, account)]
    }, [])

    return Promise.all(harvestPromises)
  }, [account, farmPids, masterChefContract])

  return { onReward: handleHarvest }
}

export const useCnftHarvest = (cnftId, isUsingHt = false) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const cnftChefContract = useCnftChef(cnftId)
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    if (cnftId === 0) {
      await harvest(masterChefContract, 0, account)
    } else if (isUsingHt) {
      await cnfthHarvestHt(cnftChefContract, account)
    } else {
      await cnfthHarvest(cnftChefContract, account)
    }
    dispatch(updateUserPendingReward(cnftId, account))
    dispatch(updateUserBalance(cnftId, account))
  }, [account, dispatch, isUsingHt, masterChefContract, cnftChefContract, cnftId])

  return { onReward: handleHarvest }
}
