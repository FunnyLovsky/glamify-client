import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import styles from './CartController.module.scss'
import { FC, useMemo } from 'react'
import AppButton from '@/shared/ui/AppButton'
import { addProductAuth, deleteProductAuth } from '@/entities/Cart'
import { UpdateProductCart } from '@/features/UpdateProductCart'

type Product = { color: string; size: string }

interface IProps {
    product: Product
}

const CartController: FC<IProps> = ({ product }) => {
    const { isLoading, error } = useAppSelector((state) => state.cartReducer)

    if (isLoading) {
        return <p>Loading..</p>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className={styles.cont}>
            <UpdateProductCart product={product} />
        </div>
    )
}

export default CartController
