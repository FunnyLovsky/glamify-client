import { Authorization } from '@/widgets/Authorization'
import { useEffect } from 'react'

const Auth = () => {
    useEffect(() => {
        document.title = 'GLAMIFY - Войти или зарегистрироваться'
    }, [])

    return <Authorization />
}

export default Auth
