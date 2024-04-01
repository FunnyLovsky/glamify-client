import styles from './Product.module.scss'
import { IProduct } from '../../types/IProduct'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { RoutesName } from '@/app/providers/router'
import Info from '../Info/Info'
import Price from '../Price/Price'
import Image from '@/shared/ui/Image'

interface IProps {
    data: IProduct
    catalog?: RoutesName | null | string
}

const Product: FC<IProps> = ({ data, catalog = null }) => {
    const path = catalog ? catalog : RoutesName.SHOP

    return (
        <Link to={`${path}/${data.url}`} className={styles.product}>
            <div className={styles.img}>
                <Image src={data.image} />
            </div>
            <Info data={data} type="small" />
            <Price data={data} type="small" />
        </Link>
    )
}

export default Product
