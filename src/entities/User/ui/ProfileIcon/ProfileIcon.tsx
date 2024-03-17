import { RoutesName } from '@/app/providers/router'
import AppIconLink from '@/shared/ui/AppIconLink'
import PROFILE from '@/shared/assets/icons/profile.svg'
import AuthBtn from '../AuthBtn/AuthBtn'
import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import LoaderProfile from '@/shared/ui/LoaderProfile'

const ProfileIcon = () => {
    const { auth, isLoading } = useAppSelector((state) => state.authReducer)

    if (isLoading) {
        return <LoaderProfile />
    }

    return <>{auth ? <AppIconLink href={RoutesName.PROFILE} Icon={PROFILE} /> : <AuthBtn />}</>
}

export default ProfileIcon
