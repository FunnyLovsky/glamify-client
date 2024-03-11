import { Navigate, createBrowserRouter } from 'react-router-dom'
import { RoutesName } from '../constans/routesName'
import { NavLayout } from '@/widgets/NavLayout'
import { ShopLayout } from '@/widgets/ShopLayout'
import { CategoryPage } from '@/pages/Category'
import { MainPage } from '@/pages/Main'
import { ProductDetailPage } from '@/pages/ProductDetail'
import { CartPage } from '@/pages/Cart'
import { AuthPage } from '@/pages/Auth'
import { ProfilePage } from '@/pages/Profile'

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
                        element: <ProductDetailPage />,
                    },
                ],
            },
            {
                path: RoutesName.SALES,
                element: <ShopLayout />,
                children: [
                    {
                        element: <CategoryPage />,
                        index: true,
                    },
                    {
                        path: RoutesName.PRODUCT_URL,
                        element: <ProductDetailPage />,
                    },
                ],
            },
            {
                path: RoutesName.ARRIVALS,
                element: <ShopLayout />,
                children: [
                    {
                        element: <CategoryPage />,
                        index: true,
                    },
                    {
                        path: RoutesName.PRODUCT_URL,
                        element: <ProductDetailPage />,
                    },
                ],
            },
            {
                path: RoutesName.STYLES,
                element: <ShopLayout />,
                children: [
                    {
                        element: <CategoryPage />,
                        index: true,
                    },
                    {
                        path: RoutesName.PRODUCT_URL,
                        element: <ProductDetailPage />,
                    },
                ],
            },
            {
                path: RoutesName.CART,
                element: <CartPage />,
            },
            {
                path: RoutesName.AUTH,
                element: <AuthPage />,
            },
            {
                path: RoutesName.PROFILE,
                element: <ProfilePage />,
            },
            {
                path: RoutesName.UNDEFINED,
                element: <Navigate to={RoutesName.MAIN} replace />,
            },
        ],
    },
])

export default routerConfig
