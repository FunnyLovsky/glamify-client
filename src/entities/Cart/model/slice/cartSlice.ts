import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartState } from '../types/CartState'
import { ICartProduct } from '../../types/ICartProduct'
import { addProductAuth } from '../service/addProduct'
import { deleteProductAuth } from '../service/deleteProduct'
import { changeCountProductAuth } from '../service/changeCountProduct'

const initialState: CartState = {
    cartProducts: [],
    isLoading: false,
    error: null,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart(state, action: PayloadAction<ICartProduct[]>) {
            state.cartProducts = action.payload
        },

        addProduct(state, action: PayloadAction<ICartProduct>) {
            state.cartProducts.push(action.payload)
        },

        changeCountProduct(state, action: PayloadAction<{ id: string; count: number }>) {
            const { count, id } = action.payload
            state.cartProducts = state.cartProducts.map((product) =>
                product.id === id ? { ...product, count } : product
            )
        },

        deleteProduct(state, action: PayloadAction<string>) {
            state.cartProducts = state.cartProducts.filter(
                (product) => product.id !== action.payload
            )
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addProductAuth.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(addProductAuth.fulfilled, (state, action) => {
            state.isLoading = false
            state.cartProducts = action.payload
        })
        builder.addCase(addProductAuth.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })

        builder.addCase(deleteProductAuth.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(deleteProductAuth.fulfilled, (state, action) => {
            state.isLoading = false
            state.cartProducts = action.payload
        })
        builder.addCase(deleteProductAuth.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })

        builder.addCase(changeCountProductAuth.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(changeCountProductAuth.fulfilled, (state, action) => {
            state.isLoading = false
            state.cartProducts = action.payload
        })
        builder.addCase(changeCountProductAuth.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    },
})

export const { setCart, addProduct, changeCountProduct, deleteProduct } = cartSlice.actions
export default cartSlice.reducer
