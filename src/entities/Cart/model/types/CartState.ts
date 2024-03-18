import { ICartProduct } from '../../types/ICartProduct'

export interface CartState {
    cartProducts: ICartProduct[]
    isLoading: boolean
    error: null | string
}
