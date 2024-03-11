import { Login } from '@/features/Login'
import Container from '@/shared/ui/Container'
import { useEffect, useState } from 'react'
import styles from './Authorization.module.scss'
import { Registration } from '@/features/Registration'

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
                <button onClick={onChangeLogin}>Войти</button>
                <button onClick={onChangeRegisrt}>Зарегистрироваться</button>
            </div>
            <div className={styles.cont}>{isLogin ? <Login /> : <Registration />}</div>
        </Container>
    )
}

export default Authoization
