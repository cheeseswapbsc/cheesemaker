import React from 'react'
import { useTotalClaim } from 'hooks/useTickets'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceCnftHusd } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import styled from 'styled-components'
import CardValue from './CardValue'
import CardHusdValue from './CardHusdValue'

const Block = styled.div`
  margin-bottom: 24px;
 }
`
const CnftWinnings = () => {
  const { claimAmount } = useTotalClaim()
  const cnftAmount = getBalanceNumber(claimAmount)
  const claimAmountHusd = new BigNumber(cnftAmount).multipliedBy(usePriceCnftHusd()).toNumber()

  return (
    <Block>
      <CardValue value={cnftAmount} lineHeight="1.5" />
      <CardHusdValue value={claimAmountHusd} decimals={2} />
    </Block>
  )
}

export default CnftWinnings
