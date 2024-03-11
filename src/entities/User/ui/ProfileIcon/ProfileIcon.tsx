import { RoutesName } from '@/app/providers/router'
import AppIconLink from '@/shared/ui/AppIconLink'
import PROFILE from '@/shared/assets/icons/profile.svg'
import AuthBtn from '../AuthBtn/AuthBtn'
import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'

const ProfileIcon = () => {
    const { auth, isLoading } = useAppSelector((state) => state.userReducer)
    console.log(isLoading)

    if (isLoading) {
        return <p>Loading...</p>
    }

    return <>{auth ? <AppIconLink href={RoutesName.PROFILE} Icon={PROFILE} /> : <AuthBtn />}</>
}

export default ProfileIcon
