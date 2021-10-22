import { useEffect } from 'react'
import { usePriceCnftBusd } from 'state/hooks'

const useGetDocumentTitlePrice = () => {
  const cnftPriceUsd = usePriceCnftBusd()
  useEffect(() => {
    document.title = `CheeseMaker - $${Number(cnftPriceUsd).toLocaleString(undefined, {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    })} | Best AMM Platform on Houbi Eco Chain`
  })
}
export default useGetDocumentTitlePrice
