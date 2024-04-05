/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { IProduct, Services } from '@/entities/Product'
import useDebounce from '@/shared/lib/hooks/useDebounce'

export const useFetchProducts = (query: string, limit: number = 4, page: number = 1) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<null | string>(null)
    const [products, setProducts] = useState<IProduct[]>([])
    const debouncedFetch = useDebounce(fetchProducts, 300)

    async function fetchProducts(limit: number, page: number, query: string) {
        try {
            setIsLoading(true)
            const product = await Services.getProducts(`limit=${limit}&page=${page}&${query}`)
            setProducts(product.data.products)
            setIsLoading(false)
        } catch (error) {
            setProducts([])
            setIsLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        debouncedFetch(limit, page, query)
    }, [query, limit, page])

    return { isLoading, error, products }
}
