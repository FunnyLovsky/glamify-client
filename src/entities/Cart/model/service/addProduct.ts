import { createAppAsyncThunk } from '@/app/providers/StoreProvider/lib/hooks'
import { Services } from '../../api/service'
import { ICartRequest } from '../../types/ICartProduct'

export const addProductAuth = createAppAsyncThunk(
    'cart/addProduct',
    async (product: ICartRequest, { rejectWithValue }) => {
        try {
            const response = await Services.addProduct(product)
            return response.data.cart
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
