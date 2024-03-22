import styles from './FilterProducts.module.scss'
import { useLocation } from 'react-router-dom'
import AppButton from '@/shared/ui/AppButton'
import { useState } from 'react'
import { Filters } from '../../types/Filters'
import Filter from '../Filter/Filter'
import Checkbox from '../Checkbox/Checkbox'
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import { setQuery } from '@/entities/Product'

const FilterProducts = () => {
    const [filters, setFilters] = useState<Filters>({} as Filters)
    const dispatch = useAppDispatch()

    const onChangeGender = (gender: 'Men' | 'Women') => {
        if (gender == filters.gender) {
            setFilters((prev) => ({ ...prev, gender: '' }))
        } else {
            setFilters((prev) => ({ ...prev, gender }))
        }
    }

    const onChangeCategory = (category: 'T-shirts' | 'Shirts') => {
        if (category == filters.category) {
            setFilters((prev) => ({ ...prev, category: '' }))
        } else {
            setFilters((prev) => ({ ...prev, category }))
        }
    }

    const onCreateQueryReq = () => {
        let query = ''
        for (const key in filters) {
            if (filters[key as keyof Filters]) {
                query += `${key}=${filters[key as keyof Filters]}&`
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

            <Filter title="Пол">
                <Checkbox
                    title="Мужчинам"
                    checked={filters.gender == 'Men'}
                    onChange={() => onChangeGender('Men')}
                />
                <Checkbox
                    title="Женщинам"
                    checked={filters.gender == 'Women'}
                    onChange={() => onChangeGender('Women')}
                />
            </Filter>

            <Filter title="Категории">
                <Checkbox
                    title="Футблоки"
                    checked={filters.category == 'T-shirts'}
                    onChange={() => onChangeCategory('T-shirts')}
                />
                <Checkbox
                    title="Рубашки"
                    checked={filters.category == 'Shirts'}
                    onChange={() => onChangeCategory('Shirts')}
                />
            </Filter>

            <AppButton variant="black" type="big" onClick={onCreateQueryReq}>
                Применить
            </AppButton>
        </div>
    )
}

export default FilterProducts
