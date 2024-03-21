import { Account } from '@/widgets/Account'
import { Breadcrumb } from '@/widgets/Breadcrumb'
import { useEffect } from 'react'

const Profile = () => {
    useEffect(() => {
        document.title = 'GLAMIFY - Ваш профиль на сайте'
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Breadcrumb />
            <Account />
        </>
    )
}

export default Profile
