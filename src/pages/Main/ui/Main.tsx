/* eslint-disable @typescript-eslint/no-explicit-any */
// import styles from './Main.module.scss'
import { useEffect } from 'react'
import { Intro } from '@/widgets/Intro'
import { ProductsList } from '@/features/ProductList'
import { RoutesName } from '@/app/providers/router'

const Main = () => {
    useEffect(() => {
        document.title = 'GLAMIFY - Модные тренды в мире одежды'
    }, [])

    return (
        <main>
            <Intro />
            <ProductsList title="Новинки" catalog={RoutesName.ARRIVALS} query="sortDate=-1" />
            <ProductsList title="Распродажа" catalog={RoutesName.SALES} query="sortSales=-1" />
        </main>
    )
}

export default Main
