import { createAppAsyncThunk } from '@/app/providers/StoreProvider/lib/hooks'
import { Services } from '../../api/service'

export const fetchProductList = createAppAsyncThunk(
    'productList/fetchProductList',
    async (
        { limit, page, query }: { limit: number; page: number; query: string },
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
