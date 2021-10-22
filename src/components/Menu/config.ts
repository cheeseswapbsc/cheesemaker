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
        href: 'https://cnft.exchange',
      },
      {
        label: 'Liquidity',
        href: 'https://cnft.exchange/#/pool',
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
//  {
//    label: 'Lottery',
//    icon: 'TicketIcon',
//    href: '/lottery',
//  },
//  {
//    label: 'Collectibles',
//    icon: 'NftIcon',
//    href: '/collectibles',
//  },
//  {
//    label: 'Teams & Profile',
//    icon: 'GroupsIcon',
//    calloutClass: 'rainbow',
//    items: [
//      {
//        label: 'Leaderboard',
//        href: '/teams',
//      },
//      {
//        label: 'Task Center',
//        href: '/profile/tasks',
//      },
//      {
//        label: 'Your Profile',
//        href: '/profile',
//      },
//    ],
//  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.cnft.exchange/#/home',
      },
      {
        label: 'Tokens',
        href: 'https://info.cnft.exchange/#/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.cnft.exchange/#/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.cnft.exchange/#/accounts',
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
        href: 'https://github.com/cnftfinance',
      },
      {
        label: 'Docs',
        href: 'https://docs.cnftswap.com',
      },
    ],
  },
]

export default config
