import styles from './Checkout.module.scss'
import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import AppLink from '@/shared/ui/AppLink'
import { RoutesName } from '@/app/providers/router'
import AppButton from '@/shared/ui/AppButton'
import { FC } from 'react'
import { getValueSum } from '../lib/getValueSum'

interface IProps {
    openPayment: () => void
}

const Checkout: FC<IProps> = ({ openPayment }) => {
    const { cartProducts } = useAppSelector((state) => state.cartReducer)
    const { auth } = useAppSelector((state) => state.authReducer)
    const { discount, subtotal, total } = getValueSum(cartProducts)

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
            {auth ? (
                <AppButton type="big" variant="black" onClick={openPayment}>
                    Оформить заказ
                </AppButton>
            ) : (
                <AppLink type="button" href={RoutesName.AUTH}>
                    Авторизуйтесь для оплаты
                </AppLink>
            )}
        </div>
    )
}

export default Checkout
