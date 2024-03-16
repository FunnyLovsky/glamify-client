import { RoutesName } from '@/app/providers/router'
import AppIconLink from '@/shared/ui/AppIconLink'
import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import CART from '@/shared/assets/icons/cart.svg'
import styles from './CartIcon.module.scss'

const CartIcon = () => {
    const { cartProducts } = useAppSelector((state) => state.cartReducer)

    return (
        <div className={styles.cont}>
            {cartProducts.length > 0 && <div className={styles.count}>{cartProducts.length}</div>}
            <AppIconLink href={RoutesName.CART} Icon={CART} />
        </div>
    )
}

export default CartIcon
