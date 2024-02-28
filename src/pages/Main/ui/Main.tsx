// import styles from './Main.module.scss'
import { useEffect } from 'react'
import { Intro } from '@/widgets/Intro'

const Main = () => {
    useEffect(() => {
        document.title = 'GLAMIFY - Модные тренды в мире одежды'
    }, [])

    return (
        <main>
            <Intro />
        </main>
    )
}

export default Main
