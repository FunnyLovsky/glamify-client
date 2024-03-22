import Container from '@/shared/ui/Container'
import styles from './CategoryList.module.scss'
import { useLocation } from 'react-router-dom'
import { routePaths } from '@/widgets/Breadcrumb'
import { Loader, Product, fetchProductList, setLoding } from '@/entities/Product'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import { createQuery } from '../lib/createQuery'
import { createArray } from '@/shared/lib/createArray'
import { FilterProducts } from '@/features/FliterProducts'

const CategoryList = () => {
    const { pathname, search } = useLocation()
    const dispatch = useAppDispatch()
    const { error, isLoading, products, totalCount, limit, page, query } = useAppSelector(
        (state) => state.productListReducer
    )
    useEffect(() => {
        const queryReq = createQuery(pathname, search) + query
        console.log(queryReq)

        dispatch(fetchProductList({ query: queryReq, limit, page }))
    }, [limit, page, dispatch, pathname, search, query])

    useEffect(() => {
        return () => {
            dispatch(setLoding(true))
        }
    }, [dispatch])

    if (error) {
        return <Container>{error}</Container>
    }

    return (
        <Container>
            <div className={styles.cont}>
                <FilterProducts />
                <div className={styles.cont_list}>
                    <div className={styles.head}>
                        <h3>{routePaths[pathname]}</h3>
                        <div className={styles.sort}>
                            <p>
                                Показано 1-{totalCount > 9 ? 9 : totalCount} из {totalCount} товаров
                            </p>
                            <p>Сортировать:</p>
                        </div>
                    </div>
                    <div className={styles.list}>
                        {!isLoading
                            ? products.map((product) => (
                                  <Product data={product} key={product.url} catalog={pathname} />
                              ))
                            : createArray(limit).map((item) => <Loader key={item} />)}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CategoryList
