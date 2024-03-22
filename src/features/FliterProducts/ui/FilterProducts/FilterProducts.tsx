import styles from './FilterProducts.module.scss'
import AppButton from '@/shared/ui/AppButton'
import { useState } from 'react'
import { Filters } from '../../types/Filters'
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import { setQuery } from '@/entities/Product'
import GenderFliter from '../GenderFilter/GenderFilter'
import CategoryFliter from '../CategoryFilter/CategoryFilter'
import SizeFilter from '../SizeFilter/SizeFilter'
import ColorFilter from '../ColorFilter/ColorFilter'
import LoaderBtn from '@/shared/ui/LoaderBtn'

const FilterProducts = () => {
    const { isLoading, query } = useAppSelector((state) => state.productListReducer)

    const [filters, setFilters] = useState<Filters>({
        category: '',
        color: [],
        gender: '',
        price: '',
        size: [],
        style: [],
    })
    const dispatch = useAppDispatch()

    const onCreateQueryReq = () => {
        window.scrollTo(0, 0)
        let query = '&'

        for (const key in filters) {
            const value = filters[key as keyof Filters]

            if (Array.isArray(value)) {
                if (value.length == 0) continue

                value.forEach((item) => (query += `${key}=${item}&`))
            } else {
                if (value == '') continue

                query += `${key}=${value}&`
            }
        }

        if (query.length > 0) {
            query = query.slice(0, -1)
        }
        console.log(query)

        dispatch(setQuery(query))
    }

    const resetFilters = () => {
        setFilters({
            category: '',
            color: [],
            gender: '',
            price: '',
            size: [],
            style: [],
        })
    }
    return (
        <div className={styles.filters}>
            <div className={styles.head}>
                <h2 className={styles.title}>Фильтры</h2>
                <AppButton variant="delete" onClick={resetFilters}>
                    Сброс
                </AppButton>
            </div>

            <GenderFliter filters={filters} onChange={setFilters} />
            <CategoryFliter filters={filters} onChange={setFilters} />
            <ColorFilter filters={filters} onChange={setFilters} />
            <SizeFilter filters={filters} onChange={setFilters} />

            {isLoading ? (
                <LoaderBtn variant="button" type="big" />
            ) : (
                <AppButton variant="black" type="big" onClick={onCreateQueryReq}>
                    {query == '' ? 'Применить' : 'Применено!'}
                </AppButton>
            )}
        </div>
    )
}

export default FilterProducts
