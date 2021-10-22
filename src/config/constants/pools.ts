import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    cnftId: 77,
    tokenName: 'CNFT',
    tokenAddress: '',
    stakingTokenName: QuoteToken.CNFT,
    stakingTokenAddress: '0xf7e522999cA7F1306D4df1B5eFcCFAB6A1eD99d6',
    contractAddress: {
      56: '0xcDfd1C98d98BDB0293A0C41C5b978CCdB612F6f5',
      256: '',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://cnft.finance/',
    harvest: false,
    tokenPerBlock: '0.1',
    sortOrder: 1,
    isFinished: true,
    tokenDecimals: 18,
  },
]

export default pools
