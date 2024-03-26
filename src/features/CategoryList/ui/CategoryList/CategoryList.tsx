import styles from './CategoryList.module.scss'
import { useLocation } from 'react-router-dom'
import { mapPathName } from '@/widgets/Breadcrumb'
import { Loader, Product } from '@/entities/Product'
import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import { createArray } from '@/shared/lib/createArray'
import NotFound from '@/shared/ui/NotFound'
import SEARCH from '@/shared/assets/icons/search.svg'

const CategoryList = () => {
    const { pathname, search } = useLocation()
    const { error, isLoading, products, totalCount, limit } = useAppSelector(
        (state) => state.productListReducer
    )

    const renderList = () => {
        if (error)
            return (
                <NotFound
                    title={error}
                    subtitle="Сбросьте фильтры или вернитесь на главную"
                    icon={SEARCH}
                />
            )

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
            <p>
                Показано 1-{currCount} из {totalCount} товаров
            </p>
        )
    }
    const title = mapPathName(pathname, search).pop()
    return (
        <div className={styles.cont_list}>
            <div className={styles.head}>
                <h3>{title.title}</h3>
                <div className={styles.sort}>{renderCountProduct()}</div>
            </div>
            {renderList()}
        </div>
    )
}

export default CategoryList
