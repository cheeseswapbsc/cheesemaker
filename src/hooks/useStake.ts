import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync, updateUserStakedBalance, updateUserBalance } from 'state/actions'
import { stake, cnftStake, cnftStakeHt } from 'utils/callHelpers'
import { useMasterchef, useCnftChef } from './useContract'

const useStake = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(masterChefContract, pid, amount, account)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, masterChefContract, pid],
  )

  return { onStake: handleStake }
}

export const useCnftStake = (cnftId, isUsingHt = false) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()
  const cnftChefContract = useCnftChef(cnftId)

  const handleStake = useCallback(
    async (amount: string, decimals: number) => {
      if (cnftId === 0) {
        await stake(masterChefContract, 0, amount, account)
      } else if (isUsingHt) {
        await cnftStakeHt(cnftChefContract, amount, account)
      } else {
        await cnftStake(cnftChefContract, amount, decimals, account)
      }
      dispatch(updateUserStakedBalance(cnftId, account))
      dispatch(updateUserBalance(cnftId, account))
    },
    [account, dispatch, isUsingHt, masterChefContract, cnftChefContract, cnftId],
  )

  return { onStake: handleStake }
}

export default useStake
