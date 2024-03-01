/* eslint-disable @typescript-eslint/no-explicit-any */
// import styles from './Main.module.scss'
import { useEffect } from 'react'
import { Intro } from '@/widgets/Intro'
import { ArrivalsList } from '@/widgets/ArrivalsList'

const Main = () => {
    useEffect(() => {
        document.title = 'GLAMIFY - Модные тренды в мире одежды'
    }, [])

    return (
        <main>
            <Intro />
            <ArrivalsList />
        </main>
    )
}

export default Main
