import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import { clearProduct, setIsLoding } from '@/entities/Product'
import { fetchProductDetail } from '@/entities/Product/model/services/fetchProductDetail'
import { ProductsList } from '@/features/ProductList'
import Conatiner from '@/shared/ui/Container'
import LoaderPage from '@/shared/ui/LoaderPage'
import { Breadcrumb } from '@/widgets/Breadcrumb'
import { InfoProduct } from '@/widgets/InfoProduct'
import { ProductDescription } from '@/widgets/ProductDescription'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { productURL } = useParams()
    const dispatch = useAppDispatch()
    const { productDetail, isLoading, error } = useAppSelector((state) => state.productReducer)

    useEffect(() => {
        dispatch(fetchProductDetail({ productURL }))
    }, [dispatch, productURL])

    useEffect(() => {
        if (productDetail.name !== '') {
            document.title = `${productDetail.name} - GLAMIFY`
        }
    }, [productDetail])

    useEffect(() => {
        return () => {
            dispatch(clearProduct())
            dispatch(setIsLoding(true))
        }
    }, [dispatch])

    if (error) {
        return <h1>{error}</h1>
    }

    if (isLoading) {
        return <LoaderPage />
    }

    return (
        <>
            <Breadcrumb product={productDetail} />
            <Conatiner>
                <InfoProduct />
                <ProductDescription />
                <ProductsList title="Похожие товары" />
            </Conatiner>
        </>
    )
}

export default ProductDetail
