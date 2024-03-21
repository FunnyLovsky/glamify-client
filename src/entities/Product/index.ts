import { Services } from './api/service'
import { fetchProductDetail } from './model/services/fetchProductDetail'
import { fetchProductList } from './model/services/fetchProductList'
import { useFetchProducts } from './model/services/useFetchProducts'
import productSlice, { clearProduct, setIsLoding } from './model/slice/ProductSlice'
import productListSlice, { setPage, setLoding } from './model/slice/productListSlice'
import Info from './ui/Info/Info'
import Price from './ui/Price/Price'
import Product from './ui/Product/Product'

export {
    productListSlice as productListReducer,
    setPage,
    setLoding,
    fetchProductList,
    useFetchProducts,
}
export { productSlice as productReducer, clearProduct, setIsLoding, fetchProductDetail }
export { Product, Price, Info, Services }

export type { IProduct, IProductDetail } from './types/IProduct'
