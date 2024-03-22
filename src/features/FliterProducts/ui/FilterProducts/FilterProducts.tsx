import styles from './FilterProducts.module.scss'
import AppButton from '@/shared/ui/AppButton'
import { useState } from 'react'
import { Filters } from '../../types/Filters'
import { useAppDispatch } from '@/app/providers/StoreProvider/lib/hooks'
import { setQuery } from '@/entities/Product'
import GenderFliter from '../GenderFilter/GenderFilter'
import CategoryFliter from '../CategoryFilter/CategoryFilter'
import SizeFilter from '../SizeFilter/SizeFilter'

const FilterProducts = () => {
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

    return (
        <div className={styles.filters}>
            <div className={styles.head}>
                <h2 className={styles.title}>Фильтры</h2>
            </div>

            <GenderFliter filters={filters} onChange={setFilters} />
            <CategoryFliter filters={filters} onChange={setFilters} />

            <SizeFilter filters={filters} onChange={setFilters} />

            <AppButton variant="black" type="big" onClick={onCreateQueryReq}>
                Применить
            </AppButton>
        </div>
    )
}

export default FilterProducts
