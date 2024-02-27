import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { productURL } = useParams()
    return <h1>Product: {productURL}</h1>
}

export default ProductDetail
