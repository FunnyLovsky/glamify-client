import { Provider } from 'react-redux'
import { routerConfig, RouterProvider } from './providers/router'
import './styles/index.scss'
import { setupStore } from './providers/StoreProvider'

const App = () => {
    return (
        <Provider store={setupStore()}>
            <RouterProvider router={routerConfig} />
        </Provider>
    )
}

export default App
