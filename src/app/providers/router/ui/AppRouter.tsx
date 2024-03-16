import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { authRoutes, publicRoutes, defaultRoutes } from '../config/routerConfig'
import { useAppSelector } from '../../StoreProvider/lib/hooks'
import { deepCopy } from '../lib/deepCopy'

const AppRouter = () => {
    const { auth } = useAppSelector((state) => state.authReducer)
    const routerConfig = deepCopy(defaultRoutes)

    const routes = auth ? authRoutes : publicRoutes
    routerConfig[0].children.push(...routes)

    return <RouterProvider router={createBrowserRouter(routerConfig)} />
}

export default AppRouter
