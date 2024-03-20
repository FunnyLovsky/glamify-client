import { useEffect, useState } from 'react'
import { IProduct, Services } from '@/entities/Product'

export const useFetchProducts = (query: string) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<null | string>(null)
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        fetchProducts(query)
    }, [query])

    async function fetchProducts(query: string) {
        try {
            const product = await Services.getProducts(`limit=4&${query}`)
            setProducts(product.data)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setError(error.message)
        }
    }

    return { isLoading, error, products }
}
