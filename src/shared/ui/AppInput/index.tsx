import { FC, forwardRef } from 'react'
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
    onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void

    ref?: React.ForwardedRef<HTMLInputElement>
}
const icons = {
    search: SEACRH,
    promo: SEACRH,
    email: EMAIL,
    password: PASSWORD,
    user: USER,
}

const AppInput: FC<IProps> = forwardRef<HTMLInputElement, IProps>(function AppInput(props, ref) {
    const { icon, type, onChange, onFocus, placeholder, value } = props
    const Icon = icons[icon]

    return (
        <div className={styles.input}>
            <Icon />
            <input
                value={value}
                ref={ref}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                onFocus={onFocus}
            />
        </div>
    )
})

export default AppInput
