import { FC } from 'react'
import styles from './AppInput.module.scss'
import SEACRH from '@/shared/assets/icons/search.svg'
import EMAIL from '@/shared/assets/icons/email_2.svg'
import PASSWORD from '@/shared/assets/icons/passwod.svg'
import USER from '@/shared/assets/icons/profile.svg'

interface IProps {
    placeholder?: string
    type: string
    icon: 'search' | 'promo' | 'email' | 'password' | 'user'
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AppInput: FC<IProps> = ({ placeholder, type = 'text', icon, onChange }) => {
    const icons = {
        search: SEACRH,
        promo: SEACRH,
        email: EMAIL,
        password: PASSWORD,
        user: USER,
    }

    const Icon = icons[icon]
    return (
        <div className={styles.input}>
            <Icon />
            <input type={type} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}

export default AppInput
