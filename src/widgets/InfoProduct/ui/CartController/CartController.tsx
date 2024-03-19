import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import styles from './CartController.module.scss'
import { FC } from 'react'
import { AddProductCart } from '@/features/AddProductCart'
import { DeleteProductCart } from '@/features/DeleteProductCart'
import { ChangeCountProductCart } from '@/features/ChangeCountProductCart'
import LoaderBtn from '@/shared/ui/LoaderBtn'

type Product = { color: string; size: string }

interface IProps {
    product: Product
}

const CartController: FC<IProps> = ({ product }) => {
    const { isLoading, error } = useAppSelector((state) => state.cartReducer)
    const { isLoading: authLoading } = useAppSelector((state) => state.authReducer)
    const { productDetail } = useAppSelector((state) => state.productReducer)
    const { cartProducts } = useAppSelector((state) => state.cartReducer)

    if (isLoading || authLoading) {
        return (
            <div className={styles.cont}>
                <LoaderBtn variant="button" type="big" />
            </div>
        )
    }

    if (error) {
        return <h1>{error}</h1>
    }

    const filterProducts = cartProducts.find((product) => product.id == productDetail.id)

    return (
        <div className={styles.cont}>
            {filterProducts ? (
                <>
                    <ChangeCountProductCart productCart={filterProducts} />
                    <DeleteProductCart productId={filterProducts.id} type="button" />
                </>
            ) : (
                <AddProductCart product={product} />
            )}
        </div>
    )
}

export default CartController
