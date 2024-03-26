import { Login } from '@/features/Login'
import Container from '@/shared/ui/Container'
import { useEffect, useState } from 'react'
import styles from './Authorization.module.scss'
import { Registration } from '@/features/Registration'
import AppButton from '@/shared/ui/AppButton'

const Authoization = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true)
    useEffect(() => {
        document.title = 'GLAMIFY - Войти или зарегистрироваться'
    }, [])

    const onChangeLogin = () => {
        setIsLogin(true)
    }

    const onChangeRegisrt = () => {
        setIsLogin(false)
    }

    return (
        <Container>
            <h1 className={styles.title}>Авторизация</h1>
            <div className={styles.controls}>
                <AppButton variant={isLogin ? 'black' : 'white'} onClick={onChangeLogin}>
                    Войти
                </AppButton>
                <AppButton variant={isLogin ? 'white' : 'black'} onClick={onChangeRegisrt}>
                    Зарегистрироваться
                </AppButton>
            </div>
            <div className={styles.cont}>{isLogin ? <Login /> : <Registration />}</div>
        </Container>
    )
}

export default Authoization
