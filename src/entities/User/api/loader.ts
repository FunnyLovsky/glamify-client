import { defer } from 'react-router-dom'
import { Services } from './service'

export async function loader() {
    return defer({
        auth: Services.auth(),
    })
}
