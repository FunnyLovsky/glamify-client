import { createAppAsyncThunk } from '@/app/providers/StoreProvider/lib/hooks'
import { Services } from '../../api/service'
import { setAuth } from '../slice/authSlice'
import { setCart } from '@/entities/Cart'

export const loginUser = createAppAsyncThunk(
    'user/loginUser',
    async (
        { email, password }: { email: string; password: string },
        { rejectWithValue, dispatch }
    ) => {
        try {
            const response = await Services.login(email, password)
            const { cart, accessToken, user } = response.data
            localStorage.setItem('token', accessToken)
            dispatch(setAuth(true))
            dispatch(setCart(cart))
            return user
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
