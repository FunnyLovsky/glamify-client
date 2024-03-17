import { useEffect, useState } from 'react'
import { Services } from '../../api/service'
import { IProductDetail } from '../../types/IProduct'

export const useFetchProductDetail = (url: string) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<null | string>(null)
    const [product, setProduct] = useState<IProductDetail>({} as IProductDetail)

    useEffect(() => {
        fetchDetailProduct(url)
    }, [url])

    async function fetchDetailProduct(url: string) {
        try {
            const product = await Services.getDetailProduct(url)
            setProduct(product.data)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setError(error.message)
        }
    }

    return { isLoading, error, product }
}
