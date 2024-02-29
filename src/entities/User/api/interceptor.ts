import $api from '@/shared/api/api'
import { Services } from './service'

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
