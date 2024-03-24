import Container from '@/shared/ui/Container'
import styles from './CartProduct.module.scss'
import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import Product from '../Product/Product'
import LoaderPage from '@/shared/ui/LoaderPage'
import { Checkout } from '@/features/Checkout'
import NotFound from '@/shared/ui/NotFound'
import CART from '@/shared/assets/icons/cart.svg'

const CartProduct = () => {
    const { cartProducts } = useAppSelector((state) => state.cartReducer)
    const { isLoading } = useAppSelector((state) => state.authReducer)

    const renderContent = () => {
        if (isLoading) {
            return <LoaderPage />
        }

        if (cartProducts.length <= 0) {
            return (
                <NotFound
                    title="В корзине пока пусто"
                    subtitle="Загляните на главную, чтобы выбрать товары или найдите нужное в поиске"
                    icon={CART}
                    type="big"
                />
            )
        }

        return (
            <>
                <h1 className={styles.title}>Ваша корзина</h1>
                <div className={styles.cont}>
                    <div className={styles.products}>
                        {cartProducts.map((product) => (
                            <Product product={product} key={product.name} />
                        ))}
                    </div>
                    <Checkout />
                </div>
            </>
        )
    }

    return <Container>{renderContent()}</Container>
}

export default CartProduct
