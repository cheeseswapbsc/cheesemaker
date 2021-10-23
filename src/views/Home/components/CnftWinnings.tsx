import React from 'react'
import { useTotalClaim } from 'hooks/useTickets'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceCnftBusd } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import styled from 'styled-components'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const Block = styled.div`
  margin-bottom: 24px;
 }
`
const CnftWinnings = () => {
  const { claimAmount } = useTotalClaim()
  const cnftAmount = getBalanceNumber(claimAmount)
  const claimAmountBusd = new BigNumber(cnftAmount).multipliedBy(usePriceCnftBusd()).toNumber()

  return (
    <Block>
      <CardValue value={cnftAmount} lineHeight="1.5" />
      <CardBusdValue value={claimAmountBusd} decimals={2} />
    </Block>
  )
}

export default CnftWinnings
