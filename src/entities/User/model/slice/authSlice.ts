import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authUser } from '../sevices/auth'
import { AuthState } from '../types/authState'

const initialState: AuthState = {
    auth: false,
    error: null,
    isLoading: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<boolean>) {
            state.auth = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(authUser.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(authUser.fulfilled, (state) => {
            state.isLoading = false
            state.auth = true
        })
        builder.addCase(authUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
            state.auth = false
        })
    },
})

export const { setAuth } = authSlice.actions
export default authSlice.reducer
