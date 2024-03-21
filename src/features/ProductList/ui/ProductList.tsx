import { IProductDetail, Loader, Product, useFetchProducts } from '@/entities/Product'
import styles from './ProductList.module.scss'
import { FC } from 'react'
import { RoutesName } from '@/app/providers/router'
import AppLink from '@/shared/ui/AppLink'
import Conatiner from '@/shared/ui/Container'
import { createArray } from '@/shared/lib/createArray'

interface IProps {
    title: string
    query?: string
    catalog?: RoutesName | null
    productDetail?: IProductDetail | null
}

const ProductList: FC<IProps> = ({ title, query = '', catalog = null, productDetail = null }) => {
    const params = productDetail ? `category=${productDetail.category}&${query}` : query

    const { isLoading, error, products } = useFetchProducts(params)

    const renderContent = () => {
        if (isLoading) {
            return (
                <>
                    {createArray(4).map((item) => (
                        <Loader key={item} />
                    ))}
                </>
            )
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
                    <div className={styles.link}>
                        <AppLink href={catalog} type="button">
                            Посмотреть все
                        </AppLink>
                    </div>
                )}
            </div>
        </Conatiner>
    )
}

export default ProductList
