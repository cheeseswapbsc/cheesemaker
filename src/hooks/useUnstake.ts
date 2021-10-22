import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useDispatch } from 'react-redux'
import {
  fetchFarmUserDataAsync,
  updateUserStakedBalance,
  updateUserBalance,
  updateUserPendingReward,
} from 'state/actions'
import { unstake, cnftUnstake, cnftEmegencyUnstake } from 'utils/callHelpers'
import { useMasterchef, useCnftChef } from './useContract'

const useUnstake = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, masterChefContract, pid],
  )

  return { onUnstake: handleUnstake }
}

const CNFTIDS = [5, 6, 3, 1, 22, 23]

export const useCnftUnstake = (cnftId) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()
  const cnftChefContract = useCnftChef(cnftId)
  const isOldCnft = CNFTIDS.includes(cnftId)

  const handleUnstake = useCallback(
    async (amount: string, decimals: number) => {
      if (cnftId === 0) {
        const txHash = await unstake(masterChefContract, 0, amount, account)
        console.info(txHash)
      } else if (isOldCnft) {
        const txHash = await cnftEmegencyUnstake(cnftChefContract, amount, account)
        console.info(txHash)
      } else {
        const txHash = await cnftUnstake(cnftChefContract, amount, decimals, account)
        console.info(txHash)
      }
      dispatch(updateUserStakedBalance(cnftId, account))
      dispatch(updateUserBalance(cnftId, account))
      dispatch(updateUserPendingReward(cnftId, account))
    },
    [account, dispatch, isOldCnft, masterChefContract, cnftChefContract, cnftId],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
