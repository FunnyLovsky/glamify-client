import { useEffect } from 'react'

const Auth = () => {
    useEffect(() => {
        document.title = 'GLAMIFY - Войти или зарегистрироваться'
    }, [])
    return <h1>Auth Page</h1>
}

export default Auth
