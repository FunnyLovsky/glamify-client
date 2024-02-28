import { FC } from 'react'
import styles from './AppInput.module.scss'
import SEACRH from '@/shared/assets/icons/search.svg'

interface IProps {
    placeholder: string
    type: 'search' | 'promo' | 'login'
}

const AppInput: FC<IProps> = ({ placeholder, type }) => {
    const icons = {
        search: SEACRH,
        promo: SEACRH,
        login: SEACRH,
    }

    const Icon = icons[type]
    return (
        <div className={styles.input}>
            <Icon />
            <input type="text" placeholder={placeholder} />
        </div>
    )
}

export default AppInput
