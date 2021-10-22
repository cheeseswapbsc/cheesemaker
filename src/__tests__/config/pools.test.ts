import pools from 'config/constants/pools'

describe('Config pools', () => {
  it.each(pools.map((pool) => pool.cnftId))('Pool #%d has an unique cnftId', (cnftId) => {
    const duplicates = pools.filter((p) => cnftId === p.cnftId)
    expect(duplicates).toHaveLength(1)
  })
  it.each(pools.map((pool) => [pool.cnftId, pool.contractAddress]))(
    'Pool #%d has an unique contract address',
    (cnftId, contractAddress) => {
      const duplicates = pools.filter((p) => contractAddress[56] === p.contractAddress[56])
      expect(duplicates).toHaveLength(1)
    },
  )
})
