import { SettingsObject, SettingsType } from './types'

const BASE_URL = 'https://cnftYield-config-api-chefkai.cnftYieldswap.vercel.app'
const settings: SettingsObject[] = [
  {
    name: 'ifos',
    url: `${BASE_URL}/ifos`,
    type: SettingsType.IFO,
  },
  {
    name: 'pools',
    url: `${BASE_URL}/pools`,
    type: SettingsType.POOL,
  },
  {
    name: 'farms',
    url: `${BASE_URL}/farms`,
    type: SettingsType.FARM,
  },
]
export default settings
