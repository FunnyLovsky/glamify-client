import { API_URL } from '@/shared/const/URL'
import axios, { AxiosResponse } from 'axios'
import { AuthResponse } from '../types/IAuthResponse'
import $api from '@/shared/api/api'

export class Services {
    static async auth() {
        return $api.get<AuthResponse>(`${API_URL}/user/auth`)
    }

    static async refresh(): Promise<AxiosResponse<AuthResponse>> {
        return axios.get<AuthResponse>(`${API_URL}/user/refresh`, { withCredentials: true })
    }

    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/user/login', { email, password })
    }

    static async registration(
        email: string,
        password: string,
        name: string
    ): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/user/registration', { email, password, name })
    }

    static async logout(): Promise<void> {
        return $api.post('/user/logout')
    }
}
