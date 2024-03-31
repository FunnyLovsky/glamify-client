import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import { setCart } from '../slice/cartSlice'
import { ICartProduct } from '../../types/ICartProduct'

export const fetchProductsLS = () => (dispatch: AppDispatch) => {
    const data = localStorage.getItem('products') || '[]'
    const products = JSON.parse(data) as ICartProduct[]
    dispatch(setCart(products))
}
