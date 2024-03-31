import { useAppDispatch } from '@/app/providers/StoreProvider/lib/hooks'
import { authUser } from '@/entities/User'
import { Header } from '@/widgets/Header'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './NavLayout.module.scss'
import { Footer } from '@/widgets/Footer'
import { fetchProductsLS } from '@/entities/Cart'

const NavLayout = () => {
    console.log('navlayou')
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(authUser())
        } else {
            dispatch(fetchProductsLS())
        }
    }, [dispatch])

    return (
        <>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default NavLayout
