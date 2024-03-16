import { createAppAsyncThunk } from '@/app/providers/StoreProvider/lib/hooks'
import { Services } from '../../api/service'
import { setUser } from '../slice/userSilce'

export const authUser = createAppAsyncThunk(
    'user/authUser',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await Services.auth()
            localStorage.setItem('token', response.data.accessToken)
            dispatch(setUser(response.data.user))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
