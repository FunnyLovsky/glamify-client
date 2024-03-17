import AppLink from '@/shared/ui/AppLink'
import styles from './CartEmpty.module.scss'
import { RoutesName } from '@/app/providers/router'

const CartEmpty = () => {
    return (
        <div className={styles.product}>
            <h2>В корзине пока пусто</h2>
            <p>Загляните на главную, чтобы выбрать товары или найдите нужное в поиске</p>
            <AppLink href={RoutesName.MAIN} type="button">
                На главную
            </AppLink>
        </div>
    )
}

export default CartEmpty
