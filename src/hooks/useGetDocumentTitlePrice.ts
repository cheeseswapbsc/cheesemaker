import { useEffect } from 'react'
import { usePriceCnftBusd } from 'state/hooks'

const useGetDocumentTitlePrice = () => {
  const cnftPriceBusd = usePriceCnftBusd()
  useEffect(() => {
    document.title = `CheeseMaker - $${Number(cnftPriceBusd).toLocaleString(undefined, {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    })} | Best AMM Platform on Houbi Eco Chain`
  })
}
export default useGetDocumentTitlePrice
