import React from 'react'
import styled from 'styled-components'
import LogoH from '../../assets/images/cheeseswap-logo.png'
import Twitter from '../../assets/svg/twitter.svg'
import Telegram from '../../assets/svg/telegram.svg'
import Github from '../../assets/svg/github.svg'
import Mail from '../../assets/svg/email.svg'
import BuiltBSC from '../../assets/svg/built-on-bsc.svg'
import AuditCertik from '../../assets/svg/certik.svg'
import DeployIPFS from '../../assets/svg/ipfs.svg'
import Kp3rb from '../../assets/partners/KP3RB.png'
import Pizza from '../../assets/partners/PIZZA.png'
import Kiwi from '../../assets/partners/KIWI.png'
import Hots from '../../assets/partners/HOTS.png'
import Cmc from '../../assets/png/cmc.png'
import Cg from '../../assets/png/cg.png'
import DappRadar from '../../assets/png/dappradar.png'
import Dapp from '../../assets/png/dapp.png'
import Digifinex from '../../assets/partners/digifinex.png'
import Lbank from '../../assets/partners/lbank.png'
import Hotbit from '../../assets/partners/hotbit.png'
import Oneinch from '../../assets/partners/oneinch.png'

const FooterSection = styled.div`
  background: '#0B1414';
  box-sizing: border-box;
  z-index: 1;
  margin: 0px;
  min-width: 0px;
  width: 100vw;
  display: flex;
  padding: 1rem;
  bottom: 0px;
  align-items: flex-start;
  justify-content: space-evenly;
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`
const FooterWrapper = styled.div`
  padding: 18px;
`
const FooterWrapper2 = styled.div`
  padding: 2px;
`
const Title = styled.div`
  margin: 0 0 0 10px;
  font-weight: 700;
`
const Title2 = styled.div`
  margin: 0 0 0 10px;
  font-weight: 400;
`
const StyledAbsoluteLink = styled.a`
  color: '#fff';
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  &:hover {
    color: '#F79108';
  }
  &.active {
    color: '#F79108';
  }
  @media (max-width: 400px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`
const StyledAbsoluteImg = styled.a`
  color: '#fff';
  margin: 6px;
  text-decoration: none;
  &:hover {
    color: '#F79108';
  }
  &.active {
    color: '#F79108';
  }
  @media (max-width: 280px) {
    margin: 4px;
  }
`

const LogoTitle = styled.img`
  height: 54px;
`
const SocialSection = styled.div`
  margin: 12px;
`
const IconLink = styled.a`
  height: 12px;
  margin-left: 8px;
`
const Icon = styled.img`
  height: 24px;
`
export default function Footer() {

  return (
    <FooterSection>
      <FooterWrapper>
        <LogoTitle src={LogoH} alt="CheeseSwap Logo" />
        <Title>
          Decentralize Finance & Entertainment Project
        </Title>
        <Title2>
          © 2020 Ǒmega Protocol Ltd.
        </Title2>
        <Title2>
          Registered No: 12855720
        </Title2>
          <FooterWrapper>
            <StyledAbsoluteImg href="https://ipfs.io/" target="_blank" rel="noopener noreferrer">
              <img src={DeployIPFS} alt="CheeseSwap.App on IPFS" height="96" width="196" />
            </StyledAbsoluteImg>
            <StyledAbsoluteImg href="https://certik.org/projects/cheeseswap/" target="_blank" rel="noopener noreferrer">
              <img src={AuditCertik} alt="Cheeseswap.app on Certik" height="96" width="196" />
            </StyledAbsoluteImg>
          </FooterWrapper>
      </FooterWrapper>
      <FooterWrapper>
      <Title>
      Products
      </Title>
        <StyledAbsoluteLink href="https://cheeseswap.app/#/swap" target="_blank">
          Swap
        </StyledAbsoluteLink>
        <StyledAbsoluteLink href="#/pool" target="_blank">
          Pool
        </StyledAbsoluteLink>
        <StyledAbsoluteLink href="https://keep3rb.network/" target="_blank">
          Keeper
        </StyledAbsoluteLink>
        <StyledAbsoluteLink href="https://info.cheeseswap.app" target="_blank">
          Analytics
        </StyledAbsoluteLink>
        <StyledAbsoluteLink href="http://cheesemaker.farm/#/ido" target="_blank">
          IDO
        </StyledAbsoluteLink>
      </FooterWrapper>
      <FooterWrapper>
      <Title>
      Useful Links
      </Title>
        <StyledAbsoluteLink href="https://docs.cheesemaker.farm" target="_blank">
          Docs
        </StyledAbsoluteLink>
        <StyledAbsoluteLink href="https://api.cheeseswap.app" target="_blank">
          API
        </StyledAbsoluteLink>
        <StyledAbsoluteLink href="https://certik.org/projects/cheeseswap/" target="_blank" rel="noopener noreferrer">
          Audit
        </StyledAbsoluteLink>
        <FooterWrapper2>
          <Title>
          Social Media
          </Title>
          <SocialSection>
            <IconLink href="https://twitter.com/cheeseswapbsc" target="_blank" rel="noopener noreferrer">
              <Icon src={Twitter} alt="Twitter" />
            </IconLink>
            <IconLink href="https://t.me/cheesemakerfarm" target="_blank" rel="noopener noreferrer">
              <Icon src={Telegram} alt="Telegram" />
            </IconLink>
            <IconLink href="https://github.com/cheeseswapbsc/" target="_blank" rel="noopener noreferrer">
              <Icon src={Github} alt="Github" />
            </IconLink>
            <IconLink href="mailto:info@cheeseswap.app" target="_blank" rel="noopener noreferrer">
              <Icon src={Mail} alt="Mail" />
            </IconLink>
          </SocialSection>
        </FooterWrapper2>
      </FooterWrapper>
      <FooterWrapper>
      <Title>
        Partner Exchanges
        </Title>
        <SocialSection>
          <IconLink href="https://www.digifinex.com/en-ww/trade/USDT/CHS" target="_blank" rel="noopener noreferrer">
            <Icon src={Digifinex} alt="Digifinex Bitcoin Exchange" />
          </IconLink>
          <IconLink href="https://www.lbank.info/exchange/chs/usdt" target="_blank" rel="noopener noreferrer">
            <Icon src={Lbank} alt="Lbank Bitcoin Exchange" />
          </IconLink>
          <IconLink href="https://www.hotbit.io/exchange?symbol=CHS_USDT" target="_blank" rel="noopener noreferrer">
            <Icon src={Hotbit} alt="Hotbit Crypto currency Exchange" />
          </IconLink>
          <IconLink href="https://1inch.exchange/#/BNB/CHS?network=56" target="_blank" rel="noopener noreferrer">
            <Icon src={Oneinch} alt="1inch leading Swap platform" />
          </IconLink>
        </SocialSection>
        <Title>
          Market Data
          </Title>
            <SocialSection>
              <IconLink href="https://coinmarketcap.com/exchanges/cheeseswap/" target="_blank" rel="noopener noreferrer">
                <Icon src={Cmc} alt="CoinMarketCap" />
              </IconLink>
              <IconLink href="https://www.coingecko.com/en/coins/cheeseswap" target="_blank" rel="noopener noreferrer">
                <Icon src={Cg} alt="CoinGecko" />
              </IconLink>
              <IconLink href="https://dappradar.com/binance-smart-chain/exchanges/cheeseswap" target="_blank" rel="noopener noreferrer">
                <Icon src={DappRadar} alt="DappRadar" />
              </IconLink>
              <IconLink href="https://www.dapp.com/app/cheeseswap" target="_blank" rel="noopener noreferrer">
                <Icon src={Dapp} alt="Dapp" />
              </IconLink>
            </SocialSection>
        </FooterWrapper>
      <FooterWrapper>
      <Title>
      Partners
      </Title>
      <FooterWrapper>
        <StyledAbsoluteImg href="https://hotswap.link/" target="_blank" rel="noopener noreferrer">
          <img src={Hots} alt="Hots Mater" height="48" width="48" />
        </StyledAbsoluteImg>
        <StyledAbsoluteImg href="https://kiwifinance.co" target="_blank" rel="noopener noreferrer">
          <img src={Kiwi} alt="Kiwi Finance" height="48" width="48" />
        </StyledAbsoluteImg>
        <StyledAbsoluteImg href="https://pizzaswap.network" target="_blank" rel="noopener noreferrer">
          <img src={Pizza} alt="Pizza Finance" height="48" width="48" />
        </StyledAbsoluteImg>
        <StyledAbsoluteImg href="https://keep3rb.network" target="_blank" rel="noopener noreferrer">
          <img src={Kp3rb} alt="Keep3r BSC Network" height="48" width="48" />
        </StyledAbsoluteImg>
      </FooterWrapper>
      <Title>
      Built on
      </Title>
      <FooterWrapper2>
        <StyledAbsoluteImg href="https://www.binance.org/" target="_blank" rel="noopener noreferrer">
          <img src={BuiltBSC} alt="Binance Smart Chain" height="96" width="196" />
        </StyledAbsoluteImg>
      </FooterWrapper2>
      </FooterWrapper>
    </FooterSection>

  )
}
