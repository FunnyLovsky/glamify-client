import { useFetchProductDetail } from '@/entities/Product/model/services/useFetchProductDetail'
import Conatiner from '@/shared/ui/Container'
import LoaderPage from '@/shared/ui/LoaderPage'
import { Breadcrumb } from '@/widgets/Breadcrumb'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { productURL } = useParams()
    const { error, isLoading, product } = useFetchProductDetail(productURL)

    if (error) {
        return (
            <>
                <Breadcrumb />
                <Conatiner>
                    <h1>{error}</h1>
                </Conatiner>
            </>
        )
    }
    return (
        <>
            <Breadcrumb />
            <Conatiner>
                {isLoading ? (
                    <LoaderPage />
                ) : (
                    <>
                        <h1>{product.name}</h1>
                        <h2>{product.rating}/5</h2>
                    </>
                )}
            </Conatiner>
        </>
    )
}

export default ProductDetail
