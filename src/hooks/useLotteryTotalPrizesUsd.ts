import { usePriceCnftBnb } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalCnft = getBalanceNumber(totalRewards)
  const cnftPriceBusd = usePriceCnftBnb()

  return totalCnft * cnftPriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
