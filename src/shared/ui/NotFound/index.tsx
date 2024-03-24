import styles from './NotFound.module.scss'
import { FC } from 'react'
import AppLink from '@/shared/ui/AppLink'
import { RoutesName } from '@/app/providers/router'

interface IProps {
    title: string
    subtitle: string
    icon: React.VFC<React.SVGProps<SVGSVGElement>>
    type?: 'big' | 'small'
}

const NotFound: FC<IProps> = ({ title, subtitle, icon, type = 'small' }) => {
    const Icon = icon

    const component = (
        <div className={styles.not_found}>
            <div className={styles.icon}>
                <Icon />
            </div>
            <div className={styles.text}>
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <AppLink href={RoutesName.MAIN} type="button">
                    На главную
                </AppLink>
            </div>
        </div>
    )

    return <>{type == 'big' ? <div className={styles.big}>{component}</div> : component}</>
}

export default NotFound
