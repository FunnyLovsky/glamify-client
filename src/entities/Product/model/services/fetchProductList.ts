import { createAppAsyncThunk } from '@/app/providers/StoreProvider/lib/hooks'
import { Services } from '../../api/service'

export const fetchProductList = createAppAsyncThunk(
    'productList/fetchProductList',
    async (
        { query, limit, page }: { query: string; limit: number; page: number },
        { rejectWithValue }
    ) => {
        try {
            const response = await Services.getProducts(`limit=${limit}&page=${page}&${query}`)
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
