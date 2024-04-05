import styles from './Filter.module.scss'
import ARROW from '@/shared/assets/elements/arrow.svg'
import { FC, useId, useState } from 'react'
import { IPropsChildren } from '@/shared/types/IComponents'

interface IProps extends IPropsChildren {
    title: string
}

const Filter: FC<IProps> = ({ title, children }) => {
    const [check, setCheck] = useState(true)
    const id = useId()

    const onChangeChech = () => {
        setCheck((prev) => !prev)
    }
    return (
        <div className={styles.filter}>
            <div className={styles.head}>
                <label htmlFor={id}>{title}</label>
                <input type="checkbox" id={id} checked={check} onChange={onChangeChech} />

                <ARROW />
            </div>
            <div className={styles.content} style={{ maxHeight: check ? '100vh' : '0vh' }}>
                {children}
            </div>
        </div>
    )
}

export default Filter
