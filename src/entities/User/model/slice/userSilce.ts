import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from '../types/userState'
import { loginUser } from '../sevices/login'
import { logoutUser } from '../sevices/logout'
import { IUser } from '../../types/IUser'

const initialState: UserState = {
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
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })

        builder.addCase(logoutUser.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.isLoading = false
            state.user = { email: '', id: '', name: '' }
        })
        builder.addCase(logoutUser.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
