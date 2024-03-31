import { addProductAuth, addProductNoAuth } from './model/service/addProduct'
import {
    changeCountProductAuth,
    changeCountProductNoAuth,
} from './model/service/changeCountProduct'
import { deleteProductAuth, deleteProductNoAuth } from './model/service/deleteProduct'
import { fetchProductsLS } from './model/service/fetchProductsLS'
import cartSlice, { setCart } from './model/slice/cartSlice'
import CartIcon from './ui/CartIcon/CartIcon'

export { cartSlice as cartReducer, setCart, CartIcon }
export { addProductNoAuth, fetchProductsLS, changeCountProductNoAuth, deleteProductNoAuth }
export { addProductAuth, deleteProductAuth, changeCountProductAuth }

export type { ICartProduct } from './types/ICartProduct'
