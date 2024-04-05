import styles from './FilterProducts.module.scss'
import AppButton from '@/shared/ui/AppButton'
import { FC, useState } from 'react'
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
import FILTER from '@/shared/assets/icons/filter.svg'

const emptyFilter: Filters = {
    category: '',
    color: [],
    gender: '',
    price: '',
    size: [],
    style: [],
    isApply: false,
}

interface IProps {
    type?: 'modal' | 'page'
    onClose?: () => void | null
}

const FilterProducts: FC<IProps> = ({ type = 'page', onClose = null }) => {
    const { isLoading } = useAppSelector((state) => state.productListReducer)
    const dispatch = useAppDispatch()
    const [filters, setFilters] = useState<Filters>(emptyFilter)

    const onCreateQueryReq = () => {
        if (filters.isApply) return

        setFilters((prev) => ({ ...prev, isApply: true }))
        window.scrollTo(0, 0)
        if (onClose) onClose()

        const query = createQueryRequest(filters)
        dispatch(setQuery(query))
    }

    const resetFilters = () => {
        setFilters(emptyFilter)
        dispatch(setQuery(''))
    }
    return (
        <div className={styles[`filters_${type}`]}>
            <div className={styles.head}>
                <h2 className={styles.title}>Фильтры</h2>
                {filters.isApply ? (
                    <DELETE onClick={resetFilters} className={styles.delete} />
                ) : (
                    <FILTER className={styles.icon} />
                )}
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
