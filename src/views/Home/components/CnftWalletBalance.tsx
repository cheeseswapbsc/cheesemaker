import React from 'react'
import { Text } from '@cheeseswapfinance/uikit'
import { useWeb3React } from '@web3-react/core'
import useTokenBalance from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCnftAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceCnftHusd } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import CardValue from './CardValue'
import CardHusdValue from './CardHusdValue'

const CnftWalletBalance = () => {
  const TranslateString = useI18n()
  const cnftBalance = useTokenBalance(getCnftAddress())
  const husdBalance = new BigNumber(getBalanceNumber(cnftBalance)).multipliedBy(usePriceCnftHusd()).toNumber()
  const { account } = useWeb3React()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '54px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return (
    <>
      <CardValue value={getBalanceNumber(cnftBalance)} decimals={4} fontSize="24px" lineHeight="36px" />
      <CardHusdValue value={husdBalance} />
    </>
  )
}

export default CnftWalletBalance
