import { Services } from './api/service'
import productSlice, { clearProduct, setIsLoding } from './model/slice/ProductSlice'
import Info from './ui/Info/Info'
import Price from './ui/Price/Price'
import Product from './ui/Product/Product'

export { Product, Services, productSlice as productReducer, clearProduct, Price, Info, setIsLoding }

export type { IProduct, IProductDetail } from './types/IProduct'
