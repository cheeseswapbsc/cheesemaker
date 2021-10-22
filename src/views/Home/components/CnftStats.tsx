import React from 'react'
import { Card, CardBody, Heading, Text } from '@cheeseswapfinance/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance, useLbalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { BLOCKS_PER_YEAR, CNFT_PER_BLOCK, CNFT_POOL_PID } from 'config'
import { getCnftAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { usePriceCnftHusd } from '../../../state/hooks'
import CardHusdValue from './CardHusdValue'



const StyledCnftStats = styled(Card)`
  background-image: url('/images/stats-bg.svg');
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`


const CnftStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCnftAddress())
  const lockedBalance = useLbalance(getCnftAddress())
  // const lbBalance = new BigNumber(lockedBalance)
  const cnftPrice = usePriceCnftHusd()
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const cnftSupply = getBalanceNumber(circSupply)
  const marketCap = cnftPrice.times(circSupply)
  const totalMcapHusd = new BigNumber(totalSupply).div(new BigNumber(10).pow(18)).multipliedBy(usePriceCnftHusd()).toNumber()
  const totalBurnedHusd = new BigNumber(burnedBalance).div(new BigNumber(10).pow(18)).multipliedBy(usePriceCnftHusd()).toNumber()
  const cnftPerBlock = Number(CNFT_PER_BLOCK)


  return (
    <StyledCnftStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'CNFT Stats')}
        </Heading>
        <Block>
          <Label>{TranslateString(10005, 'CNFT Market Cap')}:</Label>
          <CardValue fontSize="24px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Block>
        <Block>
          <Label>{TranslateString(536, 'Total CNFT Minted')}:</Label>
          {totalSupply && <CardValue fontSize="24px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Block>
        <Block>
          <Label>{TranslateString(536, 'Total CNFT Burned')}:</Label>
          <CardValue fontSize="24px" value={getBalanceNumber(burnedBalance)+3000000} decimals={0} />
        </Block>
        <Block>
          <Label>{TranslateString(10004, 'Circulating Supply')}:</Label>
          {cnftSupply && <CardValue fontSize="24px" value={cnftSupply-3000000} decimals={0} />}
        </Block>
        <Block>
          <Label>{TranslateString(540, 'New CNFT/block')}:</Label>
          <Text bold fontSize="24px">
            {cnftPerBlock}
          </Text>
        </Block>
      </CardBody>
    </StyledCnftStats>
  )
}

export default CnftStats
