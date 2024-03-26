import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import styles from './Sizes.module.scss'
import { FC } from 'react'
import AppButton from '@/shared/ui/AppButton'
import LoaderBtn from '@/shared/ui/LoaderBtn'
import { ICartProduct } from '@/entities/Cart'

type Product = { color: string; size: string }

interface IProps {
    product: Product
    onChange: (size: string) => void
    productInCart: null | ICartProduct
}

const Sizes: FC<IProps> = ({ onChange, product, productInCart }) => {
    const { productDetail } = useAppSelector((state) => state.productReducer)
    const { isLoading } = useAppSelector((state) => state.cartReducer)
    const { isLoading: authLoading } = useAppSelector((state) => state.authReducer)

    const setSelectSize = () => {
        const size = productDetail.sizes.find((size) => size == productInCart.size)
        return <AppButton variant="black">{size}</AppButton>
    }

    const renderContent = () => {
        if (isLoading || authLoading) {
            return (
                <>
                    <LoaderBtn variant="button" type="small" />
                    <LoaderBtn variant="button" type="small" />
                    <LoaderBtn variant="button" type="small" />
                </>
            )
        }

        return (
            <>
                {!productInCart
                    ? productDetail.sizes.map((size) => (
                          <AppButton
                              key={size}
                              onClick={() => onChange(size)}
                              variant={product.size == size ? 'black' : 'white'}
                          >
                              {size}
                          </AppButton>
                      ))
                    : setSelectSize()}
            </>
        )
    }

    return (
        <div className={styles.cont}>
            <p className={styles.title}>{productInCart ? 'Размер' : 'Выберите размер'}</p>
            <div className={styles.sizes}>{renderContent()}</div>
        </div>
    )
}

export default Sizes
