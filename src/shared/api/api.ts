import axios from 'axios'
import { API_URL } from '../const/URL'
import { Services } from '@/entities/User/api/service'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})

$api.interceptors.response.use(
    (config) => {
        return config
    },
    async (error) => {
        const originalRequedt = error.config

        if (error.response.status === 401 && error.config && !error.config._isRetry) {
            originalRequedt._isRetry = true
            try {
                const response = await Services.refresh()
                console.log('refresh getUSers')
                localStorage.setItem('token', response.data.accessToken)
                return $api.request(originalRequedt)
            } catch (error) {
                console.log('Не авторизован, пес')
            }
        }
        throw error
    }
)

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFudHlrQG1haWwuY29tIiwiaWQiOiI2NWVlMDgzNjE0M2FmZWJjZDUxZjExNTgiLCJuYW1lIjoiQW50eWsiLCJpYXQiOjE3MTAxNTAxMjcsImV4cCI6MTcxMDIzNjUyN30.V31IV-2_TeCKqHaymAAf4zvG8ekdT5VSlm7j-4oPRxA`
    return config
})

export default $api
