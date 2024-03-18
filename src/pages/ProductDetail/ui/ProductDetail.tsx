import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import { clearProduct } from '@/entities/Product'
import { fetchProductDetail } from '@/entities/Product/model/services/fetchProductDetail'
import Conatiner from '@/shared/ui/Container'
import { Breadcrumb } from '@/widgets/Breadcrumb'
import { InfoProduct } from '@/widgets/InfoProduct'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { productURL } = useParams()
    const dispatch = useAppDispatch()
    const { productDetail } = useAppSelector((state) => state.productReducer)

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

    return (
        <>
            <Breadcrumb />
            <Conatiner>
                <InfoProduct />
            </Conatiner>
        </>
    )
}

export default ProductDetail
