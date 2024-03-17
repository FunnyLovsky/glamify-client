import styles from './Checkout.module.scss'
import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import AppLink from '@/shared/ui/AppLink'
import { RoutesName } from '@/app/providers/router'

const Checkout = () => {
    const { cartProducts } = useAppSelector((state) => state.cartReducer)

    const subtotal = cartProducts.reduce((acc, { price, count }) => price * count + acc, 0)
    const discount = cartProducts.reduce((acc, { price, discount, count }) => {
        return acc + (discount ? Math.floor((price * discount) / 100) * count : 0)
    }, 0)
    const total = subtotal - discount

    return (
        <div className={styles.terminal}>
            <h2>Сводка заказа</h2>
            <div className={styles.cont}>
                <h4>Сумма товаров</h4>
                <span>₽{subtotal}</span>
            </div>
            <div className={styles.cont}>
                <h4>Скидка</h4>
                <span>-₽{discount}</span>
            </div>
            <div className={styles.cont}>
                <h4>Итоговая сумма</h4>
                <span>₽{total}</span>
            </div>
            <AppLink href={RoutesName.MAIN} type="button">
                Оформить заказ
            </AppLink>
        </div>
    )
}

export default Checkout
