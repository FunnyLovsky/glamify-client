import { createAppAsyncThunk } from '@/app/providers/StoreProvider/lib/hooks'
import { Services } from '../../api/service'

export const authUser = createAppAsyncThunk('user/authUser', async (_, { rejectWithValue }) => {
    try {
        const response = await Services.auth()
        localStorage.setItem('token', response.data.accessToken)
        return response.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
