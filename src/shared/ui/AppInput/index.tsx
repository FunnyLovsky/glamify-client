import { FC, forwardRef } from 'react'
import styles from './AppInput.module.scss'
import SEACRH from '@/shared/assets/icons/search.svg'
import EMAIL from '@/shared/assets/icons/email_2.svg'
import PASSWORD from '@/shared/assets/icons/passwod.svg'
import USER from '@/shared/assets/icons/profile.svg'
import CARD from '@/shared/assets/icons/card.svg'

interface IProps {
    placeholder?: string
    type: string
    icon: 'search' | 'promo' | 'email' | 'password' | 'user' | 'card'
    iconOnClick?: () => void
    value?: string
    isLoading?: boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void
    disabled?: boolean
    required?: boolean
    ref?: React.ForwardedRef<HTMLInputElement>
}
const icons = {
    search: SEACRH,
    promo: SEACRH,
    email: EMAIL,
    password: PASSWORD,
    user: USER,
    card: CARD,
}

const AppInput: FC<IProps> = forwardRef<HTMLInputElement, IProps>(function AppInput(props, ref) {
    const {
        icon,
        type,
        onChange,
        onFocus,
        placeholder,
        value,
        iconOnClick,
        isLoading,
        disabled,
        required,
    } = props
    const Icon = icons[icon]

    return (
        <div className={styles.input}>
            <div className={styles.icon}>
                {isLoading ? (
                    <span className={styles.loader}></span>
                ) : (
                    <Icon onClick={iconOnClick} />
                )}
            </div>

            <input
                value={value}
                ref={ref}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                onFocus={onFocus}
                disabled={disabled}
                required={required}
            />
        </div>
    )
})

export default AppInput
