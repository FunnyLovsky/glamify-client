import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductState } from '../types/ProductState'
import { fetchProductDetail } from '../services/fetchProductDetail'

const initialState: ProductState = {
    productDetail: {
        id: '',
        name: '',
        image: '',
        rating: 0,
        price: 0,
        discount: null,
        category: '',
        gender: '',
        style: '',
        description: '',
        sizes: [],
        details: [[]],
        colors: [],
    },
    error: null,
    isLoading: true,
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        clearProduct(state) {
            state.productDetail = {
                id: '',
                name: '',
                image: '',
                rating: 0,
                price: 0,
                discount: null,
                category: '',
                gender: '',
                style: '',
                description: '',
                sizes: [],
                details: [[]],
                colors: [],
            }
        },
        setIsLoding(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductDetail.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(fetchProductDetail.fulfilled, (state, action) => {
            state.isLoading = false
            state.productDetail = action.payload
        })
        builder.addCase(fetchProductDetail.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    },
})

export const { clearProduct, setIsLoding } = productSlice.actions
export default productSlice.reducer
