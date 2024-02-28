import { IPropsChildren } from '@/shared/types/IComponents'
import { FC } from 'react'
import styles from './Container.module.scss'

const Conatiner: FC<IPropsChildren> = ({ children }) => {
    return <div className={styles.container}>{children}</div>
}

export default Conatiner
