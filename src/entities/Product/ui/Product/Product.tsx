import styles from './Product.module.scss'
import { IProduct } from '../../types/IProduct'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { RoutesName } from '@/app/providers/router'
import { SERVER_URL } from '@/shared/const/URL'
import Info from '../Info/Info'
import Price from '../Price/Price'

interface IProps {
    data: IProduct
    catalog?: RoutesName | null | string
}

const Product: FC<IProps> = ({ data, catalog = null }) => {
    const path = catalog ? catalog : RoutesName.SHOP

    return (
        <Link to={`${path}/${data.url}`} className={styles.product}>
            <div className={styles.img}>
                <img src={`${SERVER_URL}/${data.image}`} alt={data.url} loading="lazy" />
            </div>
            <Info data={data} type="small" />
            <Price data={data} type="small" />
        </Link>
    )
}

export default Product
