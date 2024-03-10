import { RoutesName } from '@/app/providers/router'
import { useAsyncValue, useRouteLoaderData } from 'react-router-dom'
import styles from './ProfileIcon.module.scss'
import AppIconLink from '@/shared/ui/AppIconLink'
import PROFILE from '@/shared/assets/icons/profile.svg'
import AsyncComponent from '@/shared/ui/AsyncComponent'
import AuthBtn from '../AuthBtn/AuthBtn'

const ProfileIcon = () => {
    const data = useAsyncValue()
    console.log(data)

    return <AppIconLink href={RoutesName.PROFILE} Icon={PROFILE} />
}

export default ProfileIcon
