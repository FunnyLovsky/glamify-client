import { CategoryPage } from '@/pages/Category'
import { MainPage } from '@/pages/Main'
import { createBrowserRouter } from 'react-router-dom'
import { RoutesName } from './constans/routesName'
import { NavLayout } from '../layouts/NavLayout'
import { ProductDetail } from '@/pages/ProductDetail'
import { ShopLayout } from '../layouts/ShopLayout'

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
                element: <ShopLayout />,
                children: [
                    {
                        element: <CategoryPage />,
                        index: true,
                    },
                    {
                        path: RoutesName.PRODUCT_URL,
                        element: <ProductDetail />,
                    },
                ],
            },
        ],
    },
])

export default routerConfig
