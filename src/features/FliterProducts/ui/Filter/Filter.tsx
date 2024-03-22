import styles from './Filter.module.scss'
import ARROW from '@/shared/assets/elements/arrow.svg'
import { FC } from 'react'
import { IPropsChildren } from '@/shared/types/IComponents'

interface IProps extends IPropsChildren {
    title: string
}

const Filter: FC<IProps> = ({ title, children }) => {
    return (
        <div className={styles.filter}>
            <div className={styles.head}>
                <h2>{title}</h2>
                <button>
                    <ARROW />
                </button>
            </div>
            {children}
        </div>
    )
}

export default Filter
