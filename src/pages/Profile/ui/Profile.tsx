import { useEffect } from 'react'

const Profile = () => {
    useEffect(() => {
        document.title = 'GLAMIFY - Ваш профиль на сайте'
    }, [])
    return <h1>Profile Page</h1>
}

export default Profile
