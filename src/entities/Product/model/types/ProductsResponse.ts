import { IProduct } from '../../types/IProduct'

export interface ProductsResponse {
    products: IProduct[]
    totalCount: number
}
