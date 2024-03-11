import { createAppAsyncThunk } from '@/app/providers/StoreProvider/lib/hooks'
import { Services } from '../../api/service'

export const loginUser = createAppAsyncThunk(
    'user/loginUser',
    async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
        try {
            const response = await Services.login(email, password)
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
