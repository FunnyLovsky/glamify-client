import styles from './Product.module.scss'
import { IProduct } from '../types/IProduct'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { RoutesName } from '@/app/providers/router'
import { SERVER_URL } from '@/shared/const/URL'
import STAR from '@/shared/assets/icons/star.svg'

interface IProps {
    data: IProduct
    catalog: RoutesName | null
}

const Product: FC<IProps> = ({ data, catalog }) => {
    const { price, discount } = data
    const path = catalog ? catalog : RoutesName.SHOP

    const withDiscount = (
        <div className={styles.price_cont}>
            <div>₽{Math.floor(price * (1 - discount / 100))}</div>
            <div className={styles.old_price}>₽{data.price}</div>
            <div className={styles.discount}>-{discount}%</div>
        </div>
    )

    const withoutDiscount = (
        <div className={styles.price_cont}>
            <div>₽{data.price}</div>
        </div>
    )
    return (
        <Link to={`${path}/${data.url}`} className={styles.product}>
            <div className={styles.img}>
                <img src={`${SERVER_URL}/${data.image}`} alt={data.url} loading="lazy" />
            </div>
            <p className={styles.name}>{data.name}</p>
            <div className={styles.rating_cont}>
                <STAR />
                <p className={styles.rating}>
                    {data.rating}
                    <span>/5</span>
                </p>
            </div>

            {discount ? withDiscount : withoutDiscount}
        </Link>
    )
}

export default Product
