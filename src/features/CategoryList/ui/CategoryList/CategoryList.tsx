import styles from './CategoryList.module.scss'
import { useLocation } from 'react-router-dom'
import { mapPathName } from '@/widgets/Breadcrumb'
import { Loader, Product } from '@/entities/Product'
import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import { createArray } from '@/shared/lib/createArray'
import NotFound from '@/shared/ui/NotFound'
import SEARCH from '@/shared/assets/icons/search.svg'
import FILTER from '@/shared/assets/icons/filter.svg'
import FilterModal from '../FilterModal/FilterModal'
import { useRef } from 'react'
import Modal from '@/shared/ui/Modal'
import { ModalOptions } from '@/shared/types/ModalOptions'

const CategoryList = () => {
    const { pathname, search } = useLocation()
    const filterRef = useRef<ModalOptions>(null)
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

        return (
            <p>{isLoading ? 'Loading...' : `Показано 1-${currCount} из ${totalCount} товаров`}</p>
        )
    }

    const title = mapPathName(pathname, search).pop()

    return (
        <div className={styles.cont_list}>
            <div className={styles.head}>
                <h3>{title.title}</h3>
                <div className={styles.sort}>
                    <button className={styles.icon} onClick={() => filterRef.current.open()}>
                        <FILTER />
                    </button>
                    {renderCountProduct()}
                </div>
            </div>
            {renderList()}
            <Modal ref={filterRef} withAnimation={true}>
                <FilterModal onClose={() => filterRef.current.close()} />
            </Modal>
        </div>
    )
}

export default CategoryList
