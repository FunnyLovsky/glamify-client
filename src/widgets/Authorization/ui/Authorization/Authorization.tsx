import Container from '@/shared/ui/Container'
import { useEffect, useState } from 'react'
import styles from './Authorization.module.scss'
import AppButton from '@/shared/ui/AppButton'
import Login from '../Login/Login'
import Registration from '../Registration/Registration'
import { useAppDispatch } from '@/app/providers/StoreProvider/lib/hooks'
import { clearError } from '@/entities/User'

const Authoization = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true)
    const dispatch = useAppDispatch()
    useEffect(() => {
        document.title = 'GLAMIFY - Войти или зарегистрироваться'
    }, [])

    const onChangeLogin = () => {
        setIsLogin(true)
        dispatch(clearError())
    }

    const onChangeRegisrt = () => {
        setIsLogin(false)
        dispatch(clearError())
    }

    return (
        <Container>
            <div className={styles.head}>
                <h1 className={styles.title}>Авторизация</h1>
                <div className={styles.controls}>
                    <AppButton variant={isLogin ? 'black' : 'white'} onClick={onChangeLogin}>
                        Войти
                    </AppButton>
                    <AppButton variant={isLogin ? 'white' : 'black'} onClick={onChangeRegisrt}>
                        Зарегистрироваться
                    </AppButton>
                </div>
            </div>

            <div className={styles.cont}>
                <div className={styles.inner}>{isLogin ? <Login /> : <Registration />}</div>
            </div>
        </Container>
    )
}

export default Authoization
