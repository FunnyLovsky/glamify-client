import styles from './CategoryList.module.scss'
import { useLocation } from 'react-router-dom'
import { routePaths } from '@/widgets/Breadcrumb'
import { Loader, Product } from '@/entities/Product'
import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import { createArray } from '@/shared/lib/createArray'

const CategoryList = () => {
    const { pathname } = useLocation()
    const { error, isLoading, products, totalCount, limit } = useAppSelector(
        (state) => state.productListReducer
    )

    const renderList = () => {
        if (error) return <h2>{error}</h2>

        return (
            <div className={styles.list}>
                {isLoading
                    ? createArray(limit).map((item) => <Loader key={item} />)
                    : products.map((product) => (
                          <Product data={product} key={product.url} catalog={pathname} />
                      ))}
            </div>
        )
    }

    const renderCountProduct = () => {
        if (error) return

        const currCount = totalCount > limit ? limit : totalCount

        return isLoading ? (
            <p>Loading...</p>
        ) : (
            <>
                <p>
                    Показано 1-{currCount} из {totalCount} товаров
                </p>
                <p>Сортировать:</p>
            </>
        )
    }

    return (
        <div className={styles.cont_list}>
            <div className={styles.head}>
                <h3>{routePaths[pathname]}</h3>
                <div className={styles.sort}>{renderCountProduct()}</div>
            </div>
            {renderList()}
        </div>
    )
}

export default CategoryList
