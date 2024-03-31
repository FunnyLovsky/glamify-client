import { createAppAsyncThunk } from '@/app/providers/StoreProvider/lib/hooks'
import { Services } from '../../api/service'
import { setAuth } from '../slice/authSlice'
import { CartProductDto, setCart } from '@/entities/Cart'

export const registUser = createAppAsyncThunk(
    'user/registUser',
    async (
        { email, password, name }: { email: string; password: string; name: string },
        { rejectWithValue, dispatch }
    ) => {
        try {
            const products = CartProductDto.getProducts()
            const response = await Services.registration(email, password, name, products)
            const { cart, accessToken, user } = response.data
            localStorage.setItem('token', accessToken)
            localStorage.removeItem('products')
            dispatch(setAuth(true))
            dispatch(setCart(cart))
            return user
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
