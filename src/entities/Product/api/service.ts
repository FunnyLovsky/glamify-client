import { AxiosResponse } from 'axios'
import $api from '@/shared/api/api'
import { errorHandler } from '@/shared/lib/errorHandler'
import { IProductDetail } from '../types/IProduct'
import { ProductsResponse } from '../model/types/ProductsResponse'

export class Services {
    static async getDetailProduct(url: string): Promise<AxiosResponse<IProductDetail>> {
        try {
            return await $api.get<IProductDetail>(`/products/${url}`)
        } catch (error) {
            errorHandler(error)
        }
    }

    static async getProducts(query: string): Promise<AxiosResponse<ProductsResponse>> {
        try {
            return await $api.get<ProductsResponse>(`/products?${query}`)
        } catch (error) {
            errorHandler(error)
        }
    }
}
