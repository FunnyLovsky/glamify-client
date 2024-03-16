import { Account } from '@/widgets/Account'
import { useEffect } from 'react'

const Profile = () => {
    useEffect(() => {
        document.title = 'GLAMIFY - Ваш профиль на сайте'
    }, [])

    return <Account />
}

export default Profile
