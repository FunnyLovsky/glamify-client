import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductListState } from '../types/ProductListState'
import { fetchProductList } from '../services/fetchProductList'

const initialState: ProductListState = {
    error: null,
    isLoading: true,
    products: [],
    limit: 9,
    page: 1,
    totalCount: 0,
    query: '',
}

export const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload
        },
        setLoding(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        setQuery(state, action: PayloadAction<string>) {
            state.query = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductList.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(fetchProductList.fulfilled, (state, action) => {
            state.isLoading = false
            state.products = action.payload.products
            state.totalCount = action.payload.totalCount
        })
        builder.addCase(fetchProductList.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    },
})

export const { setPage, setLoding, setQuery } = productListSlice.actions
export default productListSlice.reducer
