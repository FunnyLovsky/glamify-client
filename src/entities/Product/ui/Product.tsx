import styles from './Product.module.scss'
import { IProduct } from '../types/IProduct'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface IProps {
    data: IProduct
}

const Product: FC<IProps> = ({ data }) => {
    return (
        <Link to={data.url} className={styles.product}>
            <div className="img">
                <img src={data.img} alt="" />
            </div>
            <p className="name">{data.name}</p>
            <div className="rating">{data.rating}</div>
            <div className="price">{data.price}</div>
        </Link>
    )
}

export default Product
