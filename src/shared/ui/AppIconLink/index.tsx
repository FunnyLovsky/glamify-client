import { FC } from 'react'
import styles from './AppIconLink.module.scss'
import { NavLink } from 'react-router-dom'

interface IProps {
    href: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

const AppIconLink: FC<IProps> = ({ href, Icon }) => {
    return (
        <NavLink
            to={href}
            className={({ isActive }) =>
                isActive ? [styles.active, styles.link].join(' ') : styles.link
            }
        >
            <Icon />
        </NavLink>
    )
}

export default AppIconLink
