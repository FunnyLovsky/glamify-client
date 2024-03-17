import { Services } from './api/service'
import productSlice, { clearProduct } from './model/slice/ProductSlice'
import Product from './ui/Product'

export { Product, Services, productSlice as productReducer, clearProduct }

export type { IProduct, IProductDetail } from './types/IProduct'
