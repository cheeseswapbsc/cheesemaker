import { useEffect } from 'react'
import { usePriceCnftHusd } from 'state/hooks'

const useGetDocumentTitlePrice = () => {
  const cnftPriceUsd = usePriceCnftHusd()
  useEffect(() => {
    document.title = `Cnftswap - $${Number(cnftPriceUsd).toLocaleString(undefined, {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    })} | Best AMM Platform on Houbi Eco Chain`
  })
}
export default useGetDocumentTitlePrice
