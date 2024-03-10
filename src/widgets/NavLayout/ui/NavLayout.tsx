import { Header } from '@/widgets/Header'
import { Outlet } from 'react-router-dom'

const NavLayout = () => {
    console.log('navlayou')

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default NavLayout
