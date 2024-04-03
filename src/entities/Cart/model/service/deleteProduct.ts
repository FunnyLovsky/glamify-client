import { createAppAsyncThunk } from '@/app/providers/StoreProvider/lib/hooks'
import { Services } from '../../api/service'
import { AppDispatch, RootState } from '@/app/providers/StoreProvider/config/store'
import { deleteProduct } from '../slice/cartSlice'

export const deleteProductAuth = createAppAsyncThunk(
    'cart/deleteProductAuth',
    async (productId: string = '', { rejectWithValue }) => {
        try {
            const params = productId !== '' ? `/${productId}` : ''
            const response = await Services.deleteProduct(params)
            return response.data.cart
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const deleteProductNoAuth =
    (productId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch(deleteProduct(productId))
        const products = getState().cartReducer.cartProducts
        localStorage.setItem('products', JSON.stringify(products))
    }
