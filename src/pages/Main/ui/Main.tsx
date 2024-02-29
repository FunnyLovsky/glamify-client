/* eslint-disable @typescript-eslint/no-explicit-any */
// import styles from './Main.module.scss'
import { useEffect } from 'react'
import { Intro } from '@/widgets/Intro'
import { useAsyncError, useAsyncValue, useRouteLoaderData } from 'react-router-dom'
import AsyncComponent from '@/shared/ui/AsyncComponent'

const Main = () => {
    const loaded: any = useRouteLoaderData('nav')
    console.log(loaded)

    useEffect(() => {
        document.title = 'GLAMIFY - Модные тренды в мире одежды'
    }, [])

    return (
        <main>
            <Intro />
            <AsyncComponent data={loaded.auth} error={<ErrorElement />} loader={<p>Auth...</p>}>
                <Auth />
            </AsyncComponent>
        </main>
    )
}

export default Main

function ErrorElement() {
    const error: any = useAsyncError()
    return <p>{error.message}</p>
}

function Auth() {
    const auth: any = useAsyncValue()
    return <h1>{auth}</h1>
}
