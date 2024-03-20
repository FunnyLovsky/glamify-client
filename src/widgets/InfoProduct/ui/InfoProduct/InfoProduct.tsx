import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import styles from './InfoProduct.module.scss'
import { Info, Price } from '@/entities/Product'
import Images from '../Images/Images'
import Colors from '../Colors/Colors'
import { useState } from 'react'
import Sizes from '../Sizes/Sizes'
import CartController from '../CartController/CartController'

const InfoProduct = () => {
    const { productDetail } = useAppSelector((state) => state.productReducer)
    const { cartProducts } = useAppSelector((state) => state.cartReducer)
    const [product, setProduct] = useState({
        color: productDetail.colors[0].name,
        size: productDetail.sizes[0],
    })
    console.log('infoproduct')

    const onChangeColor = (color: string) => {
        if (color !== product.color) {
            setProduct((prev) => ({ ...prev, color }))
        }
    }

    const onChangeSize = (size: string) => {
        if (size !== product.size) {
            setProduct((prev) => ({ ...prev, size }))
        }
    }

    const productInCart = cartProducts.find((product) => product.id == productDetail.id)

    return (
        <div className={styles.cont}>
            <Images product={product} />
            <div className={styles.info}>
                <Info data={productDetail} type="big" />
                <Price data={productDetail} type="big" />
                <p className={styles.description}>{productDetail.description}</p>

                <Colors product={product} onChange={onChangeColor} productInCart={productInCart} />
                <Sizes product={product} onChange={onChangeSize} productInCart={productInCart} />
                <CartController product={product} productInCart={productInCart} />
            </div>
        </div>
    )
}

export default InfoProduct
