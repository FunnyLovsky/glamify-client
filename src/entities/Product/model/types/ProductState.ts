import { IProductDetail } from '../../types/IProduct'

export interface ProductState {
    isLoading: boolean
    error: null | string
    productDetail: IProductDetail
}
