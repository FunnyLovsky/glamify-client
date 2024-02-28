import { IPropsChildren } from '@/shared/types/IComponents'
import { FC } from 'react'
import styles from './AppLink.module.scss'
import { NavLink } from 'react-router-dom'

interface IProps extends IPropsChildren {
    href: string
}

const AppLink: FC<IProps> = ({ href, children }) => {
    return (
        <NavLink
            to={href}
            className={({ isActive }) =>
                isActive ? [styles.active, styles.link].join(' ') : styles.link
            }
        >
            {children}
        </NavLink>
    )
}

export default AppLink
