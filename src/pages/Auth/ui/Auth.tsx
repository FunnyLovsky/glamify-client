import { Authorization } from '@/widgets/Authorization'
import { Breadcrumb } from '@/widgets/Breadcrumb'
import { useEffect } from 'react'

const Auth = () => {
    useEffect(() => {
        document.title = 'GLAMIFY - Войти или зарегистрироваться'
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Breadcrumb />
            <Authorization />
        </>
    )
}

export default Auth
