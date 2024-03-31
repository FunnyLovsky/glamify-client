import { createAppAsyncThunk } from '@/app/providers/StoreProvider/lib/hooks'
import { Services } from '../../api/service'
import { ICartProduct, ICartRequest } from '../../types/ICartProduct'
import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import { addProduct } from '../slice/cartSlice'

export const addProductAuth = createAppAsyncThunk(
    'cart/addProductAuth',
    async (product: ICartRequest, { rejectWithValue }) => {
        try {
            const response = await Services.addProduct(product)
            return response.data.cart
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addProductNoAuth = (product: ICartProduct) => (dispatch: AppDispatch) => {
    dispatch(addProduct(product))
    const data = localStorage.getItem('products') || '[]'
    const json = JSON.parse(data) as ICartProduct[]
    json.push(product)
    localStorage.setItem('products', JSON.stringify(json))
}
