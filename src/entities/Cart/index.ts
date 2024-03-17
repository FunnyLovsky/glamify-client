import cartSlice, { setCart } from './model/slice/cartSlice'
import CartIcon from './ui/CartIcon/CartIcon'

export { cartSlice as cartReducer, setCart, CartIcon }
export type { ICartProduct } from './types/ICartProduct'
