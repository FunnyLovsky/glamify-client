import styles from './Price.module.scss'
import { IProduct, IProductDetail } from '../../types/IProduct'
import { FC } from 'react'

interface IProps {
    data: IProduct | IProductDetail
    type: 'small' | 'big'
}

const Price: FC<IProps> = ({ data, type }) => {
    const { price, discount } = data

    const withDiscount = (
        <div className={styles[`price_cont_${type}`]}>
            <div>₽{Math.ceil(price * (1 - discount / 100))}</div>
            <div className={styles.old_price}>₽{data.price}</div>
            <div className={styles[`discount_${type}`]}>-{discount}%</div>
        </div>
    )

    const withoutDiscount = (
        <div className={styles[`price_cont_${type}`]}>
            <div>₽{data.price}</div>
        </div>
    )
    return <>{discount ? withDiscount : withoutDiscount}</>
}

export default Price
