import { useAppDispatch } from '@/app/providers/StoreProvider/lib/hooks'
import { authUser } from '@/entities/User'
import { Header } from '@/widgets/Header'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const NavLayout = () => {
    console.log('navlayou')
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(authUser())
    }, [dispatch])

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default NavLayout
