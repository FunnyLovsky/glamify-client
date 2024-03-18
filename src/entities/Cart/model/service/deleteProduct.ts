import { createAppAsyncThunk } from '@/app/providers/StoreProvider/lib/hooks'
import { Services } from '../../api/service'

export const deleteProductAuth = createAppAsyncThunk(
    'cart/deleteProduct',
    async (productId: string, { rejectWithValue }) => {
        try {
            const response = await Services.deleteProduct(productId)
            return response.data.cart
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
