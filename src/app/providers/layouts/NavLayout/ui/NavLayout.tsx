import { Header } from '@/widgets/Header'
import { Outlet } from 'react-router-dom'

const NavLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default NavLayout
