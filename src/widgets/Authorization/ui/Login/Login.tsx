import AppInput from '@/shared/ui/AppInput'
// import styles from './Login.module.scss'
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import { useState } from 'react'
import { clearError, loginUser } from '@/entities/User'
import AppForm from '@/shared/ui/AppForm'

const Login = () => {
    const dispatch = useAppDispatch()
    const { isLoading, error } = useAppSelector((state) => state.userReducer)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(loginUser({ email, password }))
    }

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        dispatch(clearError())
    }

    const onChangePassowrd = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        dispatch(clearError())
    }

    return (
        <AppForm
            btn="Войти"
            isLoading={isLoading}
            error={error}
            onSubmit={submit}
            title="Добро пожаловать"
        >
            <AppInput
                type="email"
                placeholder="Введите email..."
                icon="email"
                value={email}
                onChange={onChangeEmail}
            />
            <AppInput
                type="password"
                placeholder="Введите пароль"
                icon="password"
                value={password}
                onChange={onChangePassowrd}
            />
        </AppForm>
    )
}

export default Login
