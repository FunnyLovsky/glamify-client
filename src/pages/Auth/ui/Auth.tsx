import { RoutesName } from '@/app/providers/router'
import { Services } from '@/entities/User/api/service'
import { useEffect } from 'react'
import { Form, redirect } from 'react-router-dom'

const Auth = () => {
    useEffect(() => {
        document.title = 'GLAMIFY - Войти или зарегистрироваться'
    }, [])
    return (
        <Form method="POST">
            <input type="text" placeholder="Email..." name="email" />
            <input type="password" placeholder="Апроль" name="password" />
            <button>Войти</button>
        </Form>
    )
}

export default Auth

export async function action({ request }: any) {
    const formData = await request.formData()
    const { email, password } = Object.fromEntries(formData)

    return await Services.login(email, password)
}
