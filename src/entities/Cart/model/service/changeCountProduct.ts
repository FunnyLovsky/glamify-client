import { createAppAsyncThunk } from '@/app/providers/StoreProvider/lib/hooks'
import { Services } from '../../api/service'

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
