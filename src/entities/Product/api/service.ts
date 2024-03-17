import { AxiosResponse } from 'axios'
import $api from '@/shared/api/api'
import { errorHandler } from '@/shared/lib/errorHandler'
import { IProduct, IProductDetail } from '../types/IProduct'

export class Services {
    static async getDetailProduct(url: string): Promise<AxiosResponse<IProductDetail>> {
        try {
            return await $api.get<IProductDetail>(`/products/${url}`)
        } catch (error) {
            errorHandler(error)
        }
    }

    static async getProducts(query: string): Promise<AxiosResponse<IProduct[]>> {
        try {
            return await $api.get<IProduct[]>(`/products?${query}`)
        } catch (error) {
            errorHandler(error)
        }
    }
}
