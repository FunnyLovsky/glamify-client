import Container from '@/shared/ui/Container'
import styles from './CartProduct.module.scss'
import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import Product from '../Product/Product'
import LoaderPage from '@/shared/ui/LoaderPage'
import CartEmpty from '../CartEmpty/CartEmpty'
import { Checkout } from '@/features/Checkout'

const CartProduct = () => {
    const { cartProducts } = useAppSelector((state) => state.cartReducer)
    const { isLoading } = useAppSelector((state) => state.authReducer)

    const renderContent = () => {
        if (isLoading) {
            return <LoaderPage />
        }

        if (cartProducts.length <= 0) {
            return <CartEmpty />
        }

        return (
            <div className={styles.cont}>
                <div className={styles.products}>
                    {cartProducts.map((product) => (
                        <Product product={product} key={product.name} />
                    ))}
                </div>
                <Checkout />
            </div>
        )
    }

    return (
        <Container>
            <h1 className={styles.title}>Ваша корзина</h1>
            {renderContent()}
        </Container>
    )
}

export default CartProduct
