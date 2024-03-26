import AppInput from '@/shared/ui/AppInput'
import styles from './Login.module.scss'
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import { useState } from 'react'
import { loginUser } from '@/entities/User'
import AppButton from '@/shared/ui/AppButton'

const Login = () => {
    const dispatch = useAppDispatch()
    const { isLoading, error } = useAppSelector((state) => state.userReducer)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(loginUser({ email, password }))
    }
    return (
        <div className={styles.cont}>
            <h3>Добро пожаловать</h3>
            <form onSubmit={submit}>
                <AppInput
                    type="email"
                    placeholder="Введите email..."
                    icon="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <AppInput
                    type="password"
                    placeholder="Введите пароль"
                    icon="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {isLoading ? <p>Loading...</p> : <AppButton variant="black">Войти</AppButton>}
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}

export default Login
