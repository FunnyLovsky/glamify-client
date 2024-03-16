import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartState } from '../types/CartState'
import { ICartProduct } from '../../types/ICartProduct'

const initialState: CartState = {
    cartProducts: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart(state, action: PayloadAction<ICartProduct[]>) {
            state.cartProducts = action.payload
        },
    },
})

export const { setCart } = cartSlice.actions
export default cartSlice.reducer
