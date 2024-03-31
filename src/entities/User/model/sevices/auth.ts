import { createAppAsyncThunk } from '@/app/providers/StoreProvider/lib/hooks'
import { Services } from '../../api/service'
import { setUser } from '../slice/userSilce'
import { fetchProductsLS, setCart } from '@/entities/Cart'

export const authUser = createAppAsyncThunk(
    'user/authUser',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await Services.auth()
            const { cart, user, accessToken } = response.data
            localStorage.setItem('token', accessToken)
            dispatch(setUser(user))
            dispatch(setCart(cart))
        } catch (error) {
            dispatch(fetchProductsLS())
            return rejectWithValue(error.message)
        }
    }
)
