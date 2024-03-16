import { Breadcrumb } from '@/widgets/Breadcrumb'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { productURL } = useParams()
    return (
        <>
            <Breadcrumb />
            <h1>Product: {productURL}</h1>
        </>
    )
}

export default ProductDetail
