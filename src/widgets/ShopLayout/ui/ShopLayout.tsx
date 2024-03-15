import { RoutesName } from '@/app/providers/router'
import { Link, Outlet } from 'react-router-dom'

const ShopLayout = () => {
    return (
        <main>
            <Link to={RoutesName.MAIN}>Главаня</Link>
            <Outlet />
        </main>
    )
}

export default ShopLayout
