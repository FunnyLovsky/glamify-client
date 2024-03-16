import { Navigate, RouteObject } from 'react-router-dom'
import { RoutesName } from '../constans/routesName'
import { NavLayout } from '@/widgets/NavLayout'
import { ShopLayout } from '@/widgets/ShopLayout'
import { CategoryPage } from '@/pages/Category'
import { MainPage } from '@/pages/Main'
import { ProductDetailPage } from '@/pages/ProductDetail'
import { CartPage } from '@/pages/Cart'
import { AuthPage } from '@/pages/Auth'
import { ProfilePage } from '@/pages/Profile'
import SuspenseWrapper from '../ui/SuspenseWrapper'

export const defaultRoutes: RouteObject[] = [
    {
        path: RoutesName.MAIN,
        element: <NavLayout />,
        children: [
            {
                element: (
                    <SuspenseWrapper>
                        <MainPage />
                    </SuspenseWrapper>
                ),
                index: true,
            },
            {
                path: RoutesName.SHOP,
                element: <ShopLayout />,
                children: [
                    {
                        element: (
                            <SuspenseWrapper>
                                <CategoryPage />
                            </SuspenseWrapper>
                        ),
                        index: true,
                    },
                    {
                        path: RoutesName.PRODUCT_URL,
                        element: (
                            <SuspenseWrapper>
                                <ProductDetailPage />
                            </SuspenseWrapper>
                        ),
                    },
                ],
            },
            {
                path: RoutesName.SALES,
                element: <ShopLayout />,
                children: [
                    {
                        element: (
                            <SuspenseWrapper>
                                <CategoryPage />
                            </SuspenseWrapper>
                        ),
                        index: true,
                    },
                    {
                        path: RoutesName.PRODUCT_URL,
                        element: (
                            <SuspenseWrapper>
                                <ProductDetailPage />
                            </SuspenseWrapper>
                        ),
                    },
                ],
            },
            {
                path: RoutesName.ARRIVALS,
                element: <ShopLayout />,
                children: [
                    {
                        element: (
                            <SuspenseWrapper>
                                <CategoryPage />
                            </SuspenseWrapper>
                        ),
                        index: true,
                    },
                    {
                        path: RoutesName.PRODUCT_URL,
                        element: (
                            <SuspenseWrapper>
                                <ProductDetailPage />
                            </SuspenseWrapper>
                        ),
                    },
                ],
            },
            {
                path: RoutesName.STYLES,
                element: <ShopLayout />,
                children: [
                    {
                        element: (
                            <SuspenseWrapper>
                                <CategoryPage />
                            </SuspenseWrapper>
                        ),
                        index: true,
                    },
                    {
                        path: RoutesName.PRODUCT_URL,
                        element: (
                            <SuspenseWrapper>
                                <ProductDetailPage />
                            </SuspenseWrapper>
                        ),
                    },
                ],
            },
            {
                path: RoutesName.CART,
                element: (
                    <SuspenseWrapper>
                        <CartPage />
                    </SuspenseWrapper>
                ),
            },
        ],
    },
]

export const authRoutes: RouteObject[] = [
    {
        path: RoutesName.PROFILE,
        element: (
            <SuspenseWrapper>
                <ProfilePage />
            </SuspenseWrapper>
        ),
    },
    {
        path: RoutesName.UNDEFINED,
        element: <Navigate to={RoutesName.MAIN} replace />,
    },
]

export const publicRoutes: RouteObject[] = [
    {
        path: RoutesName.AUTH,
        element: (
            <SuspenseWrapper>
                <AuthPage />
            </SuspenseWrapper>
        ),
    },
    {
        path: RoutesName.UNDEFINED,
        element: <Navigate to={RoutesName.MAIN} replace />,
    },
]
