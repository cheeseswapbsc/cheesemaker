import React, { Suspense, useEffect, lazy } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { ResetCSS } from '@cheeseswapfinance/uikit'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import { useFetchPriceList, useFetchPublicData } from 'state/hooks'
import useGetDocumentTitlePrice from './hooks/useGetDocumentTitlePrice'
import GlobalStyle from './style/Global'
// import GoogleAnalyticsReporter from './components/analytics/GoogleAnalyticsReporter'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import ToastListener from './components/ToastListener'
import PageLoader from './components/PageLoader'
import EasterEgg from './components/EasterEgg'
import GlobalCheckBullHiccupClaimStatus from './views/Collectibles/components/GlobalCheckBullHiccupClaimStatus'
import Footer from './components/Footer'
import Home from './views/Home'
import Page from './components/layout/Page'
import Pools from './views/Pools'
import Farms from './views/Farms'
import Ifos from './views/Ifos'
import  NotFound from './views/NotFound'


// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  useEffect(() => {
    console.warn = () => null
  }, [])

  useEagerConnect()
  useFetchPublicData()
  useFetchPriceList()
  useGetDocumentTitlePrice()

  return (
    <>
     <Suspense fallback={null}>
     <HashRouter>
     <Menu>
      <ResetCSS />
      <GlobalStyle />
        <SuspenseWithChunkError fallback={<PageLoader />} />
          <Switch>
            <Route exact strict path="/" component={Home} />
            <Route exact strict path="/farms" component={Farms} />
            <Route exact strict path="/pools" component={Pools} />
            <Route exact strict path="/ido" component={Ifos} />
            <Route component={NotFound} />
          </Switch>
          <FooterSection>
          <Footer />
          </FooterSection>
         </Menu>
       </HashRouter>
     </Suspense>

   </>
  )
}
const FooterSection = styled.div`
  background: #121517;
  box-sizing: border-box;
  z-index: inherit;
  margin: 2 2 2 2px;
  min-width: 0px;
  width: 100%;
  position: relative;
  margin-top: 80px;
  display: flex;
  color: #fff;
  padding: 1rem;
  bottom: 0px;
  align-items: justify;
  justify-content: space-evenly;
  @media (max-width: 380px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`
export default React.memo(App)
