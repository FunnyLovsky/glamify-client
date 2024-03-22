import Container from '@/shared/ui/Container'
import styles from './Category.module.scss'
import { useLocation } from 'react-router-dom'
import { fetchProductList, setLoding, setQuery } from '@/entities/Product'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import { createQuery } from '../lib/createQuery'
import { FilterProducts } from '@/features/FliterProducts'
import { CategoryList } from '@/features/CategoryList'

const CategoryPage = () => {
    const { pathname, search } = useLocation()
    const { limit, page, query } = useAppSelector((state) => state.productListReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const queryReq = createQuery(pathname, search) + query
        dispatch(fetchProductList({ query: queryReq, limit, page }))
    }, [limit, page, dispatch, pathname, search, query])

    useEffect(() => {
        dispatch(setQuery(''))
    }, [pathname, dispatch])

    useEffect(() => {
        return () => {
            dispatch(setLoding(true))
            dispatch(setQuery(''))
        }
    }, [dispatch])

    return (
        <Container>
            <div className={styles.cont}>
                <FilterProducts />
                <CategoryList />
            </div>
        </Container>
    )
}

export default CategoryPage
