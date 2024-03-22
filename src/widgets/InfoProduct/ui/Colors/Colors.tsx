import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import styles from './Colors.module.scss'
import { FC } from 'react'
import LoaderBtn from '@/shared/ui/LoaderBtn'
import { ICartProduct } from '@/entities/Cart'
import { ColorBtn } from '@/entities/Product'

type Product = { color: string; size: string }

interface IProps {
    product: Product
    onChange: (color: string) => void
    productInCart: null | ICartProduct
}

const Colors: FC<IProps> = ({ onChange, product, productInCart }) => {
    const { productDetail } = useAppSelector((state) => state.productReducer)
    const { isLoading } = useAppSelector((state) => state.cartReducer)
    const { isLoading: authLoading } = useAppSelector((state) => state.authReducer)

    const setSelectColor = () => {
        const { code } = productDetail.colors.find((color) => color.name == productInCart.color)
        return (
            <button style={{ background: code }} key={code} className={styles.color_item}></button>
        )
    }

    const renderContent = () => {
        if (isLoading || authLoading) {
            return (
                <>
                    <LoaderBtn variant="circle" />
                    <LoaderBtn variant="circle" />
                    <LoaderBtn variant="circle" />
                </>
            )
        }

        return (
            <>
                {!productInCart
                    ? productDetail.colors.map((color) => (
                          <ColorBtn
                              check={product.color == color.name}
                              key={color.code}
                              color={color}
                              onChange={onChange}
                          />
                      ))
                    : setSelectColor()}
            </>
        )
    }

    return (
        <div className={styles.cont}>
            <p className={styles.title}>{productInCart ? 'Цвет' : 'Выберите цвет'}</p>
            <div className={styles.colors}>{renderContent()}</div>
        </div>
    )
}

export default Colors
