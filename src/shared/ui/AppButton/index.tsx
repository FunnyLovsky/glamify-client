import { FC } from 'react'
import styles from './AppButton.module.scss'
import { IPropsChildren } from '@/shared/types/IComponents'

interface IProps extends IPropsChildren {
    variant: 'black' | 'white' | 'delete'
    type?: 'small' | 'big'
    onClick?: () => void
}

const AppButton: FC<IProps> = ({ children, variant, onClick, type = 'small' }) => {
    const style = [styles.btn, styles[variant], styles[type]].join(' ')

    return (
        <button className={style} onClick={onClick}>
            {children}
        </button>
    )
}

export default AppButton
