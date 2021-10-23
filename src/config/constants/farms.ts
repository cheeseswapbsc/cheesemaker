import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [

  {
    pid: 4,
    risk: 3,
    lpSymbol: 'CNFT-BNB LP',
    lpAddresses: {
      256: '',
      56: '0x41d3D273D342733799F106F76912526b6C49613f',
    },
    tokenSymbol: 'CNFT',
    tokenAddresses: {
      256: '',
      56: '0xc6D866628B5A1C63E196557C1BA189211b779F64',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 1,
    risk: 3,
    lpSymbol: 'CNFT-CHS LP',
    lpAddresses: {
      256: '',
      56: '0xd1bAbB2dA509eA5d13dBD66d9a3fbae347A04578',
    },
    tokenSymbol: 'CNFT',
    tokenAddresses: {
      256: '',
      56: '0xc6D866628B5A1C63E196557C1BA189211b779F64',
    },
    quoteTokenSymbol: QuoteToken.CHS,
    quoteTokenAdresses: contracts.chs,
  },
  {
    pid: 6,
    risk: 3,
    lpSymbol: 'CNFT-BNB Cake LP',
    lpAddresses: {
      256: '',
      56: '0x4a1cee9FCa9de287d93e3281C12879e3aec5F594',
    },
    tokenSymbol: 'CNFT',
    tokenAddresses: {
      256: '',
      56: '0xc6D866628B5A1C63E196557C1BA189211b779F64',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 7,
    risk: 3,
    lpSymbol: 'BNB-USDT LP',
    lpAddresses: {
      256: '',
      56: '0xcfD63197d764cd70d07bB607e6367Ae0E869BaDD',
    },
    tokenSymbol: 'CNFT',
    tokenAddresses: {
      256: '',
      56: '0xc6D866628B5A1C63E196557C1BA189211b779F64',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  {
    pid: 8,
    risk: 3,
    lpSymbol: 'DAI-BNB LP',
    lpAddresses: {
      256: '',
      56: '0x89D20Dcda1DC49F47BcDA00C3b84Fe30AC3d127b',
    },
    tokenSymbol: 'CNFT',
    tokenAddresses: {
      256: '',
      56: '0xc6D866628B5A1C63E196557C1BA189211b779F64',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 9,
    risk: 3,
    lpSymbol: 'CNFT-KITTY LP',
    lpAddresses: {
      256: '',
      56: '0x3b9768cA05a449872A2F8A3f18E81ac48c6AD5B4',
    },
    tokenSymbol: 'CNFT',
    tokenAddresses: {
      256: '',
      56: '0xc6D866628B5A1C63E196557C1BA189211b779F64',
    },
    quoteTokenSymbol: QuoteToken.KITTY,
    quoteTokenAdresses: contracts.kitty,
  },
  {
    pid: 11,
    risk: 3,
    lpSymbol: 'CNFT-PIZZA LP',
    lpAddresses: {
      256: '',
      56: '0x872f4AfF3F56438D42207Ce6a64488375d3E08e1',
    },
    tokenSymbol: 'CNFT',
    tokenAddresses: {
      256: '',
      56: '0xc6D866628B5A1C63E196557C1BA189211b779F64',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  {
    pid: 10,
    risk: 3,
    lpSymbol: 'CNFT-MANGO LP',
    lpAddresses: {
      256: '',
      56: '0x233910E7E9c4Bc4Bb42057fe318Af7EEa80db9d3',
    },
    tokenSymbol: 'CNFT',
    tokenAddresses: {
      256: '',
      56: '0xc6D866628B5A1C63E196557C1BA189211b779F64',
    },
    quoteTokenSymbol: QuoteToken.CNFT,
    quoteTokenAdresses: contracts.cnft,
  },
]

export default farms
