import { Account } from '@/widgets/Account'
import { Breadcrumb } from '@/widgets/Breadcrumb'
import { useEffect } from 'react'

const Profile = () => {
    useEffect(() => {
        document.title = 'GLAMIFY - Ваш профиль на сайте'
    }, [])

    return (
        <>
            <Breadcrumb />
            <Account />
        </>
    )
}

export default Profile
