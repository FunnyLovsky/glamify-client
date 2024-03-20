import Container from '@/shared/ui/Container'
import styles from './CategoryList.module.scss'
import { useLocation } from 'react-router-dom'
import { routePaths } from '@/widgets/Breadcrumb'
import { Product, useFetchProducts } from '@/entities/Product'
import { useState } from 'react'
import { RoutesName } from '@/app/providers/router'

const CategoryList = () => {
    const location = useLocation()
    const [query, setQuery] = useState<string>('')
    const { isLoading, products, error } = useFetchProducts(query, 9)

    return (
        <Container>
            <div className={styles.cont}>
                <div
                    className={styles.filters}
                    style={{ width: 295, height: 100, background: 'grey' }}
                >
                    Filters
                </div>
                <div className={styles.cont_list}>
                    <div className={styles.head}>
                        <h3>{routePaths[location.pathname]}</h3>
                    </div>
                    <div className={styles.list}>
                        {!isLoading ? (
                            products.map((product) => (
                                <Product
                                    data={product}
                                    key={product.url}
                                    catalog={RoutesName.MAIN}
                                />
                            ))
                        ) : (
                            <h2>Loading...</h2>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CategoryList
