import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import { clearProduct } from '@/entities/Product'
import { fetchProductDetail } from '@/entities/Product/model/services/fetchProductDetail'
import Conatiner from '@/shared/ui/Container'
import LoaderPage from '@/shared/ui/LoaderPage'
import { ArrivalsList } from '@/widgets/ArrivalsList'
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
            <Breadcrumb />
            <Conatiner>
                <InfoProduct />
                <ProductDescription />
                <ArrivalsList />
            </Conatiner>
        </>
    )
}

export default ProductDetail
