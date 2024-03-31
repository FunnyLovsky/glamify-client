import { createAppAsyncThunk } from '@/app/providers/StoreProvider/lib/hooks'
import { Services } from '../../api/service'
import { AppDispatch, RootState } from '@/app/providers/StoreProvider/config/store'
import { changeCountProduct } from '../slice/cartSlice'

export const changeCountProductAuth = createAppAsyncThunk(
    'cart/changeCountProductAuth',
    async ({ productId, count }: { productId: string; count: number }, { rejectWithValue }) => {
        try {
            const response = await Services.changeCountProduct(productId, count)
            return response.data.cart
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const changeCountProductNoAuth =
    (productId: string, count: number) => (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch(changeCountProduct({ id: productId, count }))
        const products = getState().cartReducer.cartProducts
        localStorage.setItem('products', JSON.stringify(products))
    }
