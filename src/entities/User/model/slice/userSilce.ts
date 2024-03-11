import { createSlice } from '@reduxjs/toolkit'
import { authUser } from '../sevices/auth'
import { UserState } from '../types/userState'
import { loginUser } from '../sevices/login'

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
            state.auth = false
        })
        builder.addCase(authUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload.user
            state.auth = true
        })
        builder.addCase(authUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
            state.auth = false
        })

        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true
            state.error = null
            state.auth = false
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload.user
            state.auth = true
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
            state.auth = false
        })
    },
})

export const {} = userSlice.actions
export default userSlice.reducer
