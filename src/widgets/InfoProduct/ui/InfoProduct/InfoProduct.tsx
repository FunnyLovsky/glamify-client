import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import styles from './InfoProduct.module.scss'

import LoaderPage from '@/shared/ui/LoaderPage'

import { Info, Price } from '@/entities/Product'
import Images from '../Images/Images'
import Colors from '../Colors/Colors'
import { useEffect, useState } from 'react'
import Sizes from '../Sizes/Sizes'
import CartController from '../CartController/CartController'

const InfoProduct = () => {
    const { productDetail } = useAppSelector((state) => state.productReducer)
    const [product, setProduct] = useState({ color: '', size: '' })

    const onChangeColor = (color: string) => {
        setProduct((prev) => ({ ...prev, color }))
    }

    const onChangeSize = (size: string) => {
        setProduct((prev) => ({ ...prev, size }))
    }

    useEffect(() => {
        if (productDetail.id !== '') {
            onChangeColor(productDetail.colors[0].name)
            onChangeSize(productDetail.sizes[0])
        }
    }, [productDetail])

    return (
        <div className={styles.cont}>
            <Images />
            <div className={styles.info}>
                <Info data={productDetail} type="big" />
                <Price data={productDetail} type="big" />
                <p className={styles.description}>{productDetail.description}</p>

                <Colors product={product} onChange={onChangeColor} />
                <Sizes product={product} onChange={onChangeSize} />
                <CartController product={product} />
            </div>
        </div>
    )
}

export default InfoProduct
