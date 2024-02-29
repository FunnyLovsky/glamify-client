import { RoutesName } from '@/app/providers/router'
import { useRouteLoaderData } from 'react-router-dom'
import styles from './ProfileIcon.module.scss'
import AppIconLink from '@/shared/ui/AppIconLink'
import PROFILE from '@/shared/assets/icons/profile.svg'
import AsyncComponent from '@/shared/ui/AsyncComponent'
import AuthBtn from '../AuthBtn/AuthBtn'

const ProfileIcon = () => {
    const data: any = useRouteLoaderData('nav')
    const loader = <p>Loading...</p>

    return (
        <AsyncComponent data={data.auth} error={<AuthBtn />} loader={loader}>
            <AppIconLink href={RoutesName.PROFILE} Icon={PROFILE} />
        </AsyncComponent>
    )
}

export default ProfileIcon
