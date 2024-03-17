import { createAppAsyncThunk } from '@/app/providers/StoreProvider/lib/hooks'
import { Services } from '../../api/service'

export const fetchProductDetail = createAppAsyncThunk(
    'product/fetchProductDetail',
    async ({ productURL }: { productURL: string }, { rejectWithValue }) => {
        try {
            const response = await Services.getDetailProduct(productURL)
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
