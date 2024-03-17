import { useAppDispatch } from '@/app/providers/StoreProvider/lib/hooks'
import { fetchProductDetail } from '@/entities/Product/model/services/fetchProductDetail'
import { Breadcrumb } from '@/widgets/Breadcrumb'
import { InfoProduct } from '@/widgets/InfoProduct'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { productURL } = useParams()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProductDetail({ productURL }))
    }, [dispatch, productURL])

    return (
        <>
            <Breadcrumb />
            <InfoProduct />
        </>
    )
}

export default ProductDetail
