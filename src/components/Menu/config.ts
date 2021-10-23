import { MenuEntry } from '@cheeseswapfinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://cheeseswap.app',
      },
      {
        label: 'Liquidity',
        href: 'https://cheeseswap.app/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'NFT Marketplace',
    icon: 'TicketIcon',
    href: 'https://cheesecake.best',
    },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.cheeseswap.app/#/home',
      },
      {
        label: 'Tokens',
        href: 'https://info.cheeseswap.app/#/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.cheeseswap.app/#/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.cheeseswap.app/#/accounts',
      },
    ],
  },
  {
    label: 'IDO',
    icon: 'IfoIcon',
    href: '/ido',
  },
  {
    label: 'CerTik Audit',
    icon: 'IfoIcon',
    href: 'https://github.com/cnftfinance/cnft-audit-certik/blob/main/REP-CnftSwap%20AMM-2021-07-07.pdf',
    },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/cheeseswapbsc',
      },
      {
        label: 'Docs',
        href: 'https://docs.cheesemaker.farm',
      },
    ],
  },
]

export default config
