import { IPropsChildren } from '@/shared/types/IComponents'
import { FC } from 'react'
import styles from './AppLink.module.scss'
import { NavLink } from 'react-router-dom'

interface IProps extends IPropsChildren {
    href: string
    type: 'text' | 'button'
}

const AppLink: FC<IProps> = ({ href, children, type }) => {
    const standart = styles[type]
    const active = [styles[`active_${type}`], styles[type]].join(' ')

    return (
        <NavLink to={href} className={({ isActive }) => (isActive ? active : standart)}>
            {children}
        </NavLink>
    )
}

export default AppLink
