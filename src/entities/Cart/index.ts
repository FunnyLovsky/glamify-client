import { addProductAuth } from './model/service/addProduct'
import { deleteProductAuth } from './model/service/deleteProduct'
import cartSlice, {
    setCart,
    addProduct,
    changeCountProduct,
    deleteProduct,
} from './model/slice/cartSlice'
import CartIcon from './ui/CartIcon/CartIcon'

export {
    cartSlice as cartReducer,
    setCart,
    CartIcon,
    addProduct,
    changeCountProduct,
    deleteProduct,
    addProductAuth,
    deleteProductAuth,
}
export type { ICartProduct } from './types/ICartProduct'
