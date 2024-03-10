import { createSlice } from '@reduxjs/toolkit'
import { authUser } from '../sevices/auth'
import { UserState } from '../types/userState'

const initialState: UserState = {
    auth: false,
    user: {
        email: '',
        id: '',
        name: '',
    },
    error: null,
    isLoading: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(authUser.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(authUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload.user
        })
        builder.addCase(authUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    },
})

export const {} = userSlice.actions
export default userSlice.reducer
