import { API_URL } from '@/shared/const/URL'
import axios, { AxiosResponse } from 'axios'
import { AuthResponse } from '../types/IAuthResponse'
import $api from '@/shared/api/api'
import { errorHandler } from '@/shared/lib/errorHandler'
import { ICartRequest } from '@/entities/Cart/types/ICartProduct'

export class Services {
    static async auth(): Promise<AxiosResponse<AuthResponse>> {
        try {
            return $api.get<AuthResponse>(`/user/auth`)
        } catch (error) {
            errorHandler(error)
        }
    }

    static async refresh(): Promise<AxiosResponse<AuthResponse>> {
        return axios.get<AuthResponse>(`${API_URL}/user/refresh`, { withCredentials: true })
    }

    static async login(
        email: string,
        password: string,
        products: ICartRequest[]
    ): Promise<AxiosResponse<AuthResponse>> {
        try {
            const response = await $api.post<AuthResponse>('/user/login', {
                email,
                password,
                products,
            })
            return response
        } catch (error) {
            errorHandler(error)
        }
    }

    static async registration(
        email: string,
        password: string,
        name: string,
        products: ICartRequest[]
    ): Promise<AxiosResponse<AuthResponse>> {
        try {
            const response = await $api.post<AuthResponse>('/user/registration', {
                email,
                password,
                name,
                products,
            })
            return response
        } catch (error) {
            errorHandler(error)
        }
    }

    static async logout(): Promise<void> {
        return $api.post('/user/logout')
    }
}
