import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import styles from './CartController.module.scss'
import { FC } from 'react'
import { AddProductCart } from '@/features/AddProductCart'
import { DeleteProductCart } from '@/features/DeleteProductCart'
import { ChangeCountProductCart } from '@/features/ChangeCountProductCart'
import LoaderBtn from '@/shared/ui/LoaderBtn'
import { ICartProduct } from '@/entities/Cart'

type Product = { color: string; size: string }

interface IProps {
    product: Product
    productInCart: null | ICartProduct
}

const CartController: FC<IProps> = ({ product, productInCart }) => {
    const { isLoading, error } = useAppSelector((state) => state.cartReducer)
    const { isLoading: authLoading } = useAppSelector((state) => state.authReducer)

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

    return (
        <div className={styles.cont}>
            {productInCart ? (
                <>
                    <ChangeCountProductCart productCart={productInCart} />
                    <DeleteProductCart productId={productInCart.id} type="button" />
                </>
            ) : (
                <AddProductCart product={product} />
            )}
        </div>
    )
}

export default CartController
