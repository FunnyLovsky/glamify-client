import { FC } from 'react'
import styles from './LoaderBtn.module.scss'

interface IProps {
    variant: 'circle' | 'button'
    type?: 'small' | 'big'
}

const LoaderBtn: FC<IProps> = ({ type = 'small', variant }) => {
    return <span className={styles[`${variant}_${type}`]}></span>
}

export default LoaderBtn
