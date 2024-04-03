import { AxiosResponse } from 'axios'
import $api from '@/shared/api/api'
import { errorHandler } from '@/shared/lib/errorHandler'
import { ICartRequest, ICartResponse } from '../types/ICartProduct'

export class Services {
    static async addProduct(product: ICartRequest): Promise<AxiosResponse<ICartResponse>> {
        try {
            const response = await $api.post<ICartResponse>('/cart', product)
            return response
        } catch (error) {
            errorHandler(error)
        }
    }

    static async changeCountProduct(
        productId: string,
        count: number
    ): Promise<AxiosResponse<ICartResponse>> {
        try {
            return await $api.patch<ICartResponse>('/cart', { productId, count })
        } catch (error) {
            errorHandler(error)
        }
    }

    static async deleteProduct(param: string): Promise<AxiosResponse<ICartResponse>> {
        try {
            return await $api.delete<ICartResponse>(`/cart${param}`)
        } catch (error) {
            errorHandler(error)
        }
    }
}
