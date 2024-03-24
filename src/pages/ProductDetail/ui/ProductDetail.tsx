import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import { clearProduct, setIsLoding } from '@/entities/Product'
import { fetchProductDetail } from '@/entities/Product/model/services/fetchProductDetail'
import { ProductsList } from '@/features/ProductList'
import Conatiner from '@/shared/ui/Container'
import LoaderPage from '@/shared/ui/LoaderPage'
import NotFound from '@/shared/ui/NotFound'
import { Breadcrumb } from '@/widgets/Breadcrumb'
import { InfoProduct } from '@/widgets/InfoProduct'
import { ProductDescription } from '@/widgets/ProductDescription'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SEARCH from '@/shared/assets/icons/search.svg'

const ProductDetail = () => {
    const { productURL } = useParams()
    const dispatch = useAppDispatch()
    const { productDetail, isLoading, error } = useAppSelector((state) => state.productReducer)

    useEffect(() => {
        window.scrollTo(0, 0)
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
        return (
            <Conatiner>
                <Breadcrumb />
                <NotFound
                    title={error}
                    subtitle="Пожалуйста, проверьте правильность запроса или вернитесь к списку товаров"
                    icon={SEARCH}
                    type="big"
                />
            </Conatiner>
        )
    }

    return (
        <>
            <Breadcrumb product={productDetail} />
            <Conatiner>
                {isLoading ? (
                    <LoaderPage />
                ) : (
                    <>
                        <InfoProduct />
                        <ProductDescription />
                        <ProductsList title="Похожие товары" productDetail={productDetail} />
                    </>
                )}
            </Conatiner>
        </>
    )
}

export default ProductDetail
