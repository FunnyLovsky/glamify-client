import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import styles from './CartController.module.scss'
import { FC } from 'react'
import AppButton from '@/shared/ui/AppButton'

type Product = { color: string; size: string }

interface IProps {
    product: Product
}

const CartController: FC<IProps> = ({ product }) => {
    const { productDetail } = useAppSelector((state) => state.productReducer)
    const { auth } = useAppSelector((state) => state.authReducer)

    const addProductToCart = () => {
        console.log({ ...product, productId: productDetail.id, count: 1 })
    }

    return (
        <div className={styles.cont}>
            <AppButton variant="black" type="big" onClick={addProductToCart}>
                Добавить в корзину
            </AppButton>
        </div>
    )
}

export default CartController
