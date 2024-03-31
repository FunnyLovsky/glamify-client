import styles from './Checkout.module.scss'
import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import AppLink from '@/shared/ui/AppLink'
import { RoutesName } from '@/app/providers/router'
import AppButton from '@/shared/ui/AppButton'
import { useState } from 'react'
import { PaymentModal } from '@/features/PaymentModal'

const Checkout = () => {
    const { cartProducts } = useAppSelector((state) => state.cartReducer)
    const { auth } = useAppSelector((state) => state.authReducer)
    const [modal, setModal] = useState(false)

    const subtotal = cartProducts.reduce((acc, { price, count }) => price * count + acc, 0)
    const discount = cartProducts.reduce((acc, { price, discount, count }) => {
        return acc + (discount ? Math.floor((price * discount) / 100) * count : 0)
    }, 0)
    const total = subtotal - discount

    const onOpenModal = () => {
        setModal(true)
    }

    const onCloseModal = () => {
        setModal(false)
    }

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
                <AppButton type="big" variant="black" onClick={onOpenModal}>
                    Оформить заказ
                </AppButton>
            ) : (
                <AppLink type="button" href={RoutesName.AUTH}>
                    Авторизуйтесь для оплаты
                </AppLink>
            )}

            {modal && <PaymentModal onClose={onCloseModal} total={total} />}
        </div>
    )
}

export default Checkout
