import { useEffect, useState } from 'react'
import { IProduct, Services } from '@/entities/Product'

export const useFetchProducts = (query: string, limit: number = 4, page: number = 1) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<null | string>(null)
    const [products, setProducts] = useState<IProduct[]>([])

    async function fetchProducts() {
        try {
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
        fetchProducts()
    }, [query])

    return { isLoading, error, products }
}
