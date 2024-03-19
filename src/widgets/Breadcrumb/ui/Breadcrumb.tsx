import Container from '@/shared/ui/Container'
import styles from './Breadcrumb.module.scss'
import { Link, useLocation } from 'react-router-dom'
import ARROW from '@/shared/assets/elements/arrow.svg'
import { mapPathName } from '../lib/mapPathName'
import { FC } from 'react'
import { RoutesName } from '@/app/providers/router'
import { IProductDetail } from '@/entities/Product'

interface IProps {
    product?: IProductDetail | null
}

const Breadcrumb: FC<IProps> = ({ product = null }) => {
    const location = useLocation()
    const paths = mapPathName(location.pathname)

    if (product) {
        const { gender, category } = product
        const pathsProduct = [
            { to: `${RoutesName.SHOP}?gender=${gender}`, title: gender },
            { to: `${RoutesName.SHOP}?category=${category}`, title: category },
        ]
        paths.push(...pathsProduct)
    }

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
