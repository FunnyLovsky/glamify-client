import AppInput from '@/shared/ui/AppInput'
// import styles from './Registration.module.scss'
import AppForm from '@/shared/ui/AppForm'
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import { useState } from 'react'
import { clearError, registUser } from '@/entities/User'

const Registration = () => {
    const dispatch = useAppDispatch()
    const { isLoading, error } = useAppSelector((state) => state.userReducer)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(registUser({ email, password, name }))
    }

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
        dispatch(clearError())
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
            btn="Зарегистрироваться"
            isLoading={isLoading}
            error={error}
            onSubmit={submit}
            title="Создать новый аккаунт"
        >
            <AppInput
                type="text"
                placeholder="Придумайте имя..."
                icon="user"
                onChange={onChangeName}
            />
            <AppInput
                type="email"
                placeholder="Введите email..."
                icon="email"
                value={email}
                onChange={onChangeEmail}
            />
            <AppInput
                type="password"
                placeholder="Введите пароль..."
                icon="password"
                value={password}
                onChange={onChangePassowrd}
            />
        </AppForm>
    )
}

export default Registration
