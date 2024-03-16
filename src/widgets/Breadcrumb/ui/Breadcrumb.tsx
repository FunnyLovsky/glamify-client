import Container from '@/shared/ui/Container'
import styles from './Breadcrumb.module.scss'
import { Link, useLocation } from 'react-router-dom'
import ARROW from '@/shared/assets/elements/arrow.svg'
import { mapPathName } from '../lib/mapPathName'

const Breadcrumb = () => {
    const location = useLocation()
    const paths = mapPathName(location.pathname)

    return (
        <Container>
            <div className={styles.breadcrumb}>
                {paths.map((path) => (
                    <div className={styles.link} key={path.to}>
                        <Link to={path.to}>{path.title}</Link>
                        <ARROW />
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Breadcrumb
