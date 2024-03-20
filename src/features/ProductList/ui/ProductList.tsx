import { Product } from '@/entities/Product'
import styles from './ProductList.module.scss'
import { FC } from 'react'
import { RoutesName } from '@/app/providers/router'
import AppLink from '@/shared/ui/AppLink'
import { useFetchProducts } from '../hooks/useFectcProducts'
import Conatiner from '@/shared/ui/Container'

interface IProps {
    title: string
    query?: string
    catalog?: RoutesName | null
}

const ProductList: FC<IProps> = ({ title, query = '', catalog = null }) => {
    const { isLoading, error, products } = useFetchProducts(query)

    const renderContent = () => {
        if (isLoading) {
            return <h1>Loading...</h1>
        }

        if (error) {
            return <h3>{error}</h3>
        }

        return (
            <>
                {products.map((product) => (
                    <Product data={product} key={product.url} catalog={catalog} />
                ))}
            </>
        )
    }

    return (
        <Conatiner>
            <div className={styles.cont}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.list}>{renderContent()}</div>
                {catalog && (
                    <AppLink href={catalog} type="button">
                        Посмотреть все
                    </AppLink>
                )}
            </div>
        </Conatiner>
    )
}

export default ProductList
