import { Services } from './api/service'
import { fetchProductDetail } from './model/services/fetchProductDetail'
import { fetchProductList } from './model/services/fetchProductList'
import { useFetchProducts } from './model/services/useFetchProducts'
import productSlice, { clearProduct, setIsLoding } from './model/slice/ProductSlice'
import productListSlice, { setPage, setLoding, setQuery } from './model/slice/productListSlice'
import ColorBtn from './ui/ColorBtn/ColorBtn'
import Info from './ui/Info/Info'
import Loader from './ui/Loader/Loader'
import Price from './ui/Price/Price'
import Product from './ui/Product/Product'

export {
    productListSlice as productListReducer,
    setPage,
    setLoding,
    fetchProductList,
    setQuery,
    useFetchProducts,
}
export { productSlice as productReducer, clearProduct, setIsLoding, fetchProductDetail }
export { Product, Price, Info, Services, Loader, ColorBtn }

export type { IProduct, IProductDetail, Colors } from './types/IProduct'
