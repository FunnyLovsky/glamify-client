import { IProduct, Product } from '@/entities/Product'
import styles from './ProductList.module.scss'
import { FC } from 'react'
import { RoutesName } from '@/app/providers/router'
import AppLink from '@/shared/ui/AppLink'

interface IProps {
    title: string
    data: IProduct[]
    catalog?: RoutesName | null
}

const ProductList: FC<IProps> = ({ data, title, catalog = null }) => {
    return (
        <div className={styles.cont}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.list}>
                {data.map((product) => (
                    <Product data={product} key={product.url} catalog={catalog} />
                ))}
            </div>
            {catalog && (
                <AppLink href={catalog} type="button">
                    Посмотреть все
                </AppLink>
            )}
        </div>
    )
}

export default ProductList
