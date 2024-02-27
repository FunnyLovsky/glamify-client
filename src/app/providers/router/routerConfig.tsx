import { CategoryPage } from '@/pages/Category'
import { MainPage } from '@/pages/Main'
import { createBrowserRouter } from 'react-router-dom'
import { RoutesName } from './constans/routesName'
import { NavLayout } from '../layouts/NavLayout'

const routerConfig = createBrowserRouter([
    {
        path: RoutesName.MAIN,
        element: <NavLayout />,
        children: [
            {
                element: <MainPage />,
                index: true,
            },
            {
                path: RoutesName.SHOP,
                element: <CategoryPage />,
            },
        ],
    },
])

export default routerConfig
