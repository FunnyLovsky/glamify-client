import styles from './Info.module.scss'
import { IProduct, IProductDetail } from '../../types/IProduct'
import { FC } from 'react'
import STAR from '@/shared/assets/icons/star.svg'

interface IProps {
    type: 'small' | 'big'
    data: IProduct | IProductDetail
}

const Info: FC<IProps> = ({ type, data }) => {
    return (
        <>
            <p className={styles[`name_${type}`]}>{data.name}</p>
            <div className={styles[`rating_cont_${type}`]}>
                <STAR />
                <p className={styles[`rating_${type}`]}>
                    {data.rating}
                    <span>/5</span>
                </p>
            </div>
        </>
    )
}

export default Info
