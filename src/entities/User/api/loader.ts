import { defer } from 'react-router-dom'
import { Services } from './service'

export async function loader() {
    console.log('aut')

    return defer({
        auth: Services.auth(),
    })
}
