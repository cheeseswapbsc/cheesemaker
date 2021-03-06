import React, { useEffect, useCallback, useState } from 'react'
import { Route, useRouteMatch, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { Image, Heading, RowType, Toggle, Text } from '@cheeseswapfinance/uikit'
import styled from 'styled-components'
import { BLOCKS_PER_YEAR, CNFT_POOL_PID } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceBnbUsdt, usePriceCnftBusd, usePriceDaiBnb } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import { getBalanceNumber } from 'utils/formatBalance'
import { orderBy } from 'lodash'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import Table from './components/FarmTable/FarmTable'
import FarmTabButtons from './components/FarmTabButtons'
import SearchInput from './components/SearchInput'
import { RowProps } from './components/FarmTable/Row'
import ToggleView from './components/ToggleView/ToggleView'
import { DesktopColumnSchema, ViewMode } from './components/types'
import Select, { OptionProps } from './components/Select/Select'


export interface FarmsProps {
  tokenMode?: boolean
}

const ControlContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;

  justify-content: space-between;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 16px 32px;
  }
`

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  ${Text} {
    margin-left: 8px;
  }
`

const LabelWrapper = styled.div`
  > ${Text} {
    font-size: 12px;
  }
`

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    padding: 0;
  }
`

const ViewControls = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;

  > div {
    padding: 8px 0px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
    width: auto;

    > div {
      padding: 0;
    }
  }
`

const StyledImage = styled(Image)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 58px;
`



const Farms: React.FC<FarmsProps> = () => {
  const { path } = useRouteMatch()
  const { pathname } = useLocation()
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  const cnftPrice = usePriceCnftBusd()
  const bnbPrice = usePriceBnbUsdt()
  const [query, setQuery] = useState('')
  const [viewMode, setViewMode] = useState(ViewMode.TABLE)
  const daiPriceUsd = usePriceDaiBnb()
  const { account } = useWeb3React()
  const [sortOption, setSortOption] = useState('hot')
  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const [stackedOnly, setStackedOnly] = useState(false)

  const activeFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier === '0X')

  const stakedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )

  const sortFarms = (farms: FarmWithStakedValue[]): FarmWithStakedValue[] => {
    switch (sortOption) {
      case 'apr':
        return orderBy(farms, 'apy', 'desc')
      case 'multiplier':
        return orderBy(farms, (farm: FarmWithStakedValue) => Number(farm.multiplier.slice(0, -1)), 'desc')
      case 'earned':
        return orderBy(farms, (farm: FarmWithStakedValue) => (farm.userData ? farm.userData.earnings : 0), 'desc')
      case 'liquidity':
        return orderBy(farms, (farm: FarmWithStakedValue) => Number(farm.liquidity), 'desc')
      default:
        return farms
    }
  }

  const farmsList = useCallback(
    (farmsToDisplay): FarmWithStakedValue[] => {
      const cnftPriceVsBNB = new BigNumber(farmsLP.find((farm) => farm.pid === CNFT_POOL_PID)?.tokenPriceVsQuote || 0)
      let farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
          if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
          return farm
        }
        const cnftRewardPerBlock = new BigNumber(farm.cnftPerBlock || 0.25)
          .times(new BigNumber(farm.poolWeight))
          .div(new BigNumber(10).pow(18))
        const cnftRewardPerYear = cnftRewardPerBlock.times(BLOCKS_PER_YEAR)
         let apy = cnftPrice.times(cnftRewardPerYear)

  //      const totalValue = new BigNumber(farm.lpTotalInQuoteToken || 0)




        if (farm.quoteTokenSymbol === QuoteToken.BUSD || farm.quoteTokenSymbol === QuoteToken.BNB) {
               apy = cnftPriceVsBNB.times(cnftRewardPerYear).div(farm.lpTotalInQuoteToken).times(bnbPrice)
             } else if (farm.quoteTokenSymbol === QuoteToken.USDT) {
               apy = cnftPrice.div(daiPriceUsd).times(cnftRewardPerYear).div(farm.lpTotalInQuoteToken)
             } else if (farm.quoteTokenSymbol === QuoteToken.DAI) {
               apy = cnftRewardPerYear.div(farm.lpTotalInQuoteToken)
             } else if (farm.dual) {
               const cnftApy =
                 farm && cnftPriceVsBNB.times(cnftRewardPerBlock).times(BLOCKS_PER_YEAR).div(farm.lpTotalInQuoteToken)
               const dualApy =
                 farm.tokenPriceVsQuote &&
                 new BigNumber(farm.tokenPriceVsQuote)
                   .times(farm.dual.rewardPerBlock)
                   .times(BLOCKS_PER_YEAR)
                   .div(farm.lpTotalInQuoteToken)

               apy = cnftApy && dualApy && cnftApy.plus(dualApy)
             }

             let liquidity = farm.lpTotalInQuoteToken

             if (!farm.lpTotalInQuoteToken) {
               liquidity = 0
             }
             if (farm.quoteTokenSymbol === QuoteToken.BNB) {
               liquidity = bnbPrice.times(farm.lpTotalInQuoteToken)
             }
             if (farm.quoteTokenSymbol === QuoteToken.CNFT) {
               liquidity = cnftPrice.times(farm.lpTotalInQuoteToken)
             }

             if (farm.quoteTokenSymbol === QuoteToken.BNB) {
               liquidity = daiPriceUsd.times(farm.lpTotalInQuoteToken)
             }

             return { ...farm, apy, liquidity }
           })

           if (query) {
             const lowercaseQuery = query.toLowerCase()
             farmsToDisplayWithAPY = farmsToDisplayWithAPY.filter((farm: FarmWithStakedValue) => {
               if (farm.lpSymbol.toLowerCase().includes(lowercaseQuery)) {
                 return true
               }

               return false
             })
           }
           return farmsToDisplayWithAPY
         },
         [bnbPrice, farmsLP, query, cnftPrice, daiPriceUsd],
       )

       const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
         setQuery(event.target.value)
       }


  const isActive = !pathname.includes('history')
   let farmsStaked = []
   if (isActive) {
     farmsStaked = stackedOnly ? farmsList(stakedOnlyFarms) : farmsList(activeFarms)
   } else {
     farmsStaked = farmsList(inactiveFarms)
   }

   farmsStaked = sortFarms(farmsStaked)

  const rowData = farmsStaked.map((farm) => {
    const { quoteTokenAdresses, quoteTokenSymbol, tokenAddresses } = farm
    const lpLabel = farm.lpSymbol && farm.lpSymbol.split(' ')[0].toUpperCase().replace('CNFTYIELD', '')

    const row: RowProps = {
      apr: {
        value:
          farm.apy &&
          farm.apy.times(new BigNumber(100)).toNumber().toLocaleString('en-US', { maximumFractionDigits: 2 }),
        multiplier: farm.multiplier,
        lpLabel,
        quoteTokenAdresses,
        quoteTokenSymbol,
        tokenAddresses,
        cnftPrice,
        originalValue: farm.apy,
      },
      farm: {
        image: farm.lpSymbol.split(' ')[0].toLocaleLowerCase(),
        label: lpLabel,
        pid: farm.pid,
      },
      earned: {
        earnings: farm.userData ? getBalanceNumber(new BigNumber(farm.userData.earnings)) : null,
        pid: farm.pid,
      },
      liquidity: {
        liquidity: farm.liquidity,
      },
      multiplier: {
        multiplier: farm.multiplier,
      },
      details: farm,
    }

    return row
  })

  const renderContent = (): JSX.Element => {
    if (viewMode === ViewMode.TABLE && rowData.length) {
      const columnSchema = DesktopColumnSchema

      const columns = columnSchema.map((column) => ({
        id: column.id,
        name: column.name,
        label: column.label,
        sort: (a: RowType<RowProps>, b: RowType<RowProps>) => {
          switch (column.name) {
            case 'farm':
              return b.id - a.id
            case 'apr':
              if (a.original.apr.value && b.original.apr.value) {
                return Number(a.original.apr.value) - Number(b.original.apr.value)
              }

              return 0
            case 'earned':
              return a.original.earned.earnings - b.original.earned.earnings
            default:
              return 1
          }
        },
        sortable: column.sortable,
      }))

      return <Table data={rowData} columns={columns} />
    }

    return (
      <div>
        <FlexLayout>
          <Route exact path={`${path}`}>
            {farmsStaked.map((farm) => (
              <FarmCard
                key={farm.pid}
                farm={farm}
                bnbPrice={bnbPrice}
                cnftPrice={cnftPrice}
                daiPrice={daiPriceUsd}
                account={account}
                removed={false}
              />
            ))}
          </Route>
          <Route exact path={`${path}/history`}>
            {farmsStaked.map((farm) => (
              <FarmCard
                key={farm.pid}
                farm={farm}
                bnbPrice={bnbPrice}
                cnftPrice={cnftPrice}
                daiPrice={daiPriceUsd}
                account={account}
                removed
              />
            ))}
          </Route>
        </FlexLayout>
      </div>
    )
  }

  const handleSortOptionChange = (option: OptionProps): void => {
    setSortOption(option.value)
  }

  return (
  <Page>
      <Hero>
      <div>
        <Heading as="h1" size="xxl" color="#fff" mb="24px">
          {TranslateString(999, 'Farms')}
        </Heading>
        <Heading size="lg" color="#fff">
          {TranslateString(999, 'Deposit & Stake Liquidity Pool Token (Cheese-LP) tokens to earn.')}
        </Heading>
        </div>
        <img src="/images/piggy-cnft-golden.svg" alt="CheeseMaker Smart Pool icon" width={410} height={191} />
      </Hero>

      <ControlContainer>
          <ViewControls>
            <ToggleView viewMode={viewMode} onToggle={(mode: ViewMode) => setViewMode(mode)} />
            <ToggleWrapper>
              <Toggle checked={stackedOnly} onChange={() => setStackedOnly(!stackedOnly)} scale="sm" />
              <Text> {TranslateString(1116, 'Staked only')}</Text>
            </ToggleWrapper>
            <FarmTabButtons />
          </ViewControls>
          <FilterContainer>
            <LabelWrapper>
              <Text>SORT BY</Text>
              <Select
                options={[
                  {
                    label: 'Hot',
                    value: 'hot',
                  },
                  {
                    label: 'APR',
                    value: 'apr',
                  },
                  {
                    label: 'Multiplier',
                    value: 'multiplier',
                  },
                  {
                    label: 'Earned',
                    value: 'earned',
                  },
                  {
                    label: 'Liquidity',
                    value: 'liquidity',
                  },
                  ]}
                onChange={handleSortOptionChange}
              />
            </LabelWrapper>
            <LabelWrapper style={{ marginLeft: 16 }}>
              <Text>SEARCH</Text>
              <SearchInput onChange={handleChangeQuery} value={query} />
            </LabelWrapper>
          </FilterContainer>
        </ControlContainer>
        {renderContent()}
        <StyledImage src="/images/cnft-bg.svg" alt="CheeseMaker" width={120} height={103} />
      </Page>
    )
}

const Hero = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr;
  margin-left: auto;
  margin-right: auto;
  max-width: 250px;
  padding: 48px 0;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 16px;
    li {
      margin-bottom: 4px;
    }
  }
  img {
    height: auto;
    max-width: 100%;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    margin: 0;
    max-width: none;
  }
`

export default Farms
