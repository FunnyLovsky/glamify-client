import styles from './Product.module.scss'
import { FC } from 'react'
import { SERVER_URL } from '@/shared/const/URL'
import { ICartProduct } from '@/entities/Cart'

interface IProps {
    product: ICartProduct
}

const ProductCart: FC<IProps> = ({ product }) => {
    return (
        <div className={styles.product}>
            <img src={`${SERVER_URL}/${product.image}`} alt="" />
            <div className={styles.info}>
                <div className={styles.desc}>
                    <h3>{product.name}</h3>
                    <p>Размер: {product.size}</p>
                    <p>Цвет: {product.color}</p>
                </div>
                <div className={styles.price}>₽{product.price}</div>
            </div>
        </div>
    )
}

export default ProductCart
