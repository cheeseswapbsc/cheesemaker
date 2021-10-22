import BigNumber from 'bignumber.js'
import { getCnftAddress } from 'utils/addressHelpers'
import useTokenBalance from './useTokenBalance'

/**
 * A hook to check if a wallet's CNFT balance is at least the amount passed in
 */
const useHasCnftBalance = (minimumBalance: BigNumber) => {
  const cnftBalance = useTokenBalance(getCnftAddress())
  return cnftBalance.gte(minimumBalance)
}

export default useHasCnftBalance
