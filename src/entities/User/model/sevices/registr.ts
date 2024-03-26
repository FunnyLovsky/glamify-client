import { createAppAsyncThunk } from '@/app/providers/StoreProvider/lib/hooks'
import { Services } from '../../api/service'
import { setAuth } from '../slice/authSlice'
import { setCart } from '@/entities/Cart'

export const registUser = createAppAsyncThunk(
    'user/registUser',
    async (
        { email, password, name }: { email: string; password: string; name: string },
        { rejectWithValue, dispatch }
    ) => {
        try {
            const response = await Services.registration(email, password, name)
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
