import { createAppAsyncThunk } from '@/app/providers/StoreProvider/lib/hooks'
import { Services } from '../../api/service'
import { setAuth } from '../slice/authSlice'

export const loginUser = createAppAsyncThunk(
    'user/loginUser',
    async (
        { email, password }: { email: string; password: string },
        { rejectWithValue, dispatch }
    ) => {
        try {
            const response = await Services.login(email, password)
            localStorage.setItem('token', response.data.accessToken)
            dispatch(setAuth(true))
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
