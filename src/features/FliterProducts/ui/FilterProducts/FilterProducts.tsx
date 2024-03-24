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
import { createQueryRequest } from '../../lib/createQueryRequest'
import DELETE from '@/shared/assets/icons/delete.svg'

const FilterProducts = () => {
    const { isLoading } = useAppSelector((state) => state.productListReducer)
    const dispatch = useAppDispatch()
    const [filters, setFilters] = useState<Filters>({
        category: '',
        color: [],
        gender: '',
        price: '',
        size: [],
        style: [],
        isApply: false,
    })

    const onCreateQueryReq = () => {
        if (filters.isApply) return

        setFilters((prev) => ({ ...prev, isApply: true }))
        window.scrollTo(0, 0)

        const query = createQueryRequest(filters)
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
            isApply: false,
        })
        dispatch(setQuery(''))
    }
    return (
        <div className={styles.filters}>
            <div className={styles.head}>
                <h2 className={styles.title}>Фильтры</h2>
                {filters.isApply && <DELETE onClick={resetFilters} />}
            </div>

            <GenderFliter filters={filters} onChange={setFilters} />
            <CategoryFliter filters={filters} onChange={setFilters} />
            <ColorFilter filters={filters} onChange={setFilters} />
            <SizeFilter filters={filters} onChange={setFilters} />

            {isLoading ? (
                <LoaderBtn variant="button" type="big" />
            ) : (
                <AppButton variant="black" type="big" onClick={onCreateQueryReq}>
                    {!filters.isApply ? 'Применить' : 'Применено!'}
                </AppButton>
            )}
        </div>
    )
}

export default FilterProducts
