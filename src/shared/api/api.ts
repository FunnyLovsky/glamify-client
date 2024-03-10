import axios from 'axios'
import { API_URL } from '../const/URL'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbWFpbC5jb20iLCJpZCI6IjY1ZGNkNGYwOWRlOTNiODAzMjI4ZGI4OSIsIm5hbWUiOiJVc2VyIiwiaWF0IjoxNzEwMDgzMzczLCJleHAiOjE3MTAxNjk3NzN9.gFCA1_C6M3rgBvYjDRkeNStzLClIIb1iHZdlxMw5Cp8`
    return config
})

export default $api
