import Container from '@/shared/ui/Container'
import styles from './CategoryList.module.scss'
import { useLocation } from 'react-router-dom'
import { routePaths } from '@/widgets/Breadcrumb'
import { Product, fetchProductList, setLoding } from '@/entities/Product'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import { createQuery } from '../lib/createQuery'

const CategoryList = () => {
    const { pathname, search } = useLocation()
    const dispatch = useAppDispatch()
    const { error, isLoading, products, totalCount, limit, page } = useAppSelector(
        (state) => state.productListReducer
    )
    useEffect(() => {
        const query = createQuery(pathname, search)
        console.log(query)

        dispatch(fetchProductList({ query, limit, page }))
    }, [limit, page, dispatch, pathname, search])

    useEffect(() => {
        return () => {
            dispatch(setLoding(true))
        }
    }, [])

    if (error) {
        return <Container>{error}</Container>
    }

    return (
        <Container>
            <div className={styles.cont}>
                <div className={styles.filters}>Filters</div>
                <div className={styles.cont_list}>
                    <div className={styles.head}>
                        <h3>{routePaths[pathname]}</h3>
                        <p>Показано 1-9 из {totalCount} товаров</p>
                    </div>
                    <div className={styles.list}>
                        {!isLoading ? (
                            products.map((product) => <Product data={product} key={product.url} />)
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
