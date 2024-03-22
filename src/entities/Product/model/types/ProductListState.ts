import { IProduct } from '../../types/IProduct'

export interface ProductListState {
    isLoading: boolean
    error: null | string
    products: IProduct[]
    totalCount: number
    page: number
    limit: number
    query: string
}
