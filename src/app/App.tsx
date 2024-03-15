import { Provider } from 'react-redux'
import { AppRouter } from './providers/router'
import './styles/index.scss'
import { setupStore } from './providers/StoreProvider'

const App = () => {
    return (
        <Provider store={setupStore()}>
            <AppRouter />
        </Provider>
    )
}

export default App
