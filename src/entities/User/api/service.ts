import { API_URL } from '@/shared/const/URL'

export class Services {
    static async auth() {
        const response = await fetch(`${API_URL}/user/auth`)

        if (!response.ok) {
            const res = await response.json()
            throw Error(res.message)
        }

        return await response.json()
    }
}
