import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { getProfileContract } from 'utils/contractHelpers'
import makeBatchRequest from 'utils/makeBatchRequest'
import { useToast } from 'state/hooks'

const useGetProfileCosts = () => {
  const [costs, setCosts] = useState({
    numberCnftToReactivate: new BigNumber(0),
    numberCnftToRegister: new BigNumber(0),
    numberCnftToUpdate: new BigNumber(0),
  })
  const { toastError } = useToast()

  useEffect(() => {
    const fetchCosts = async () => {
      try {
        const profileContract = getProfileContract()
        const [numberCnftToReactivate, numberCnftToRegister, numberCnftToUpdate] = await makeBatchRequest([
          profileContract.methods.numberCnftToReactivate().call,
          profileContract.methods.numberCnftToRegister().call,
          profileContract.methods.numberCnftToUpdate().call,
        ])

        setCosts({
          numberCnftToReactivate: new BigNumber(numberCnftToReactivate as string),
          numberCnftToRegister: new BigNumber(numberCnftToRegister as string),
          numberCnftToUpdate: new BigNumber(numberCnftToUpdate as string),
        })
      } catch (error) {
        toastError('Error', 'Could not retrieve CNFT costs for profile')
      }
    }

    fetchCosts()
  }, [setCosts, toastError])

  return costs
}

export default useGetProfileCosts
