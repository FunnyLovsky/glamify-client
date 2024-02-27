import { routerConfig, RouterProvider } from './providers/router'
import './styles/index.scss'

const App = () => {
    return <RouterProvider router={routerConfig} />
}

export default App
