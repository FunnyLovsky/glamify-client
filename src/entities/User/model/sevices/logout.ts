import { createAppAsyncThunk } from '@/app/providers/StoreProvider/lib/hooks'
import { Services } from '../../api/service'
import { setAuth } from '../slice/authSlice'

export const logoutUser = createAppAsyncThunk(
    'user/logoutUser',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            await Services.logout()
            localStorage.removeItem('token')
            dispatch(setAuth(false))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
