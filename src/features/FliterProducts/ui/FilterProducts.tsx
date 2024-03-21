import styles from './FilterProducts.module.scss'
import { useLocation } from 'react-router-dom'
import ARROW from '@/shared/assets/elements/arrow.svg'
import AppButton from '@/shared/ui/AppButton'
import { useState } from 'react'

interface Filters {
    category: string
    gender: string
    style: string[]
    size: string[]
    color: string[]
    price: string
}

const FilterProducts = () => {
    const [filters, setFilters] = useState<Filters>({} as Filters)
    const { pathname, search } = useLocation()

    const onChangeGender = (gender: 'Men' | 'Women') => {
        if (gender == filters.gender) {
            setFilters((prev) => ({ ...prev, gender: '' }))
        } else {
            setFilters((prev) => ({ ...prev, gender }))
        }
    }

    return (
        <div className={styles.filters}>
            <div className={styles.head}>
                <h2 className={styles.title}>Фильтры</h2>
            </div>
            <div className={styles.filter}>
                <div className={styles.head}>
                    <h2>Пол</h2>
                    <button>
                        <ARROW />
                    </button>
                </div>
                <div className={styles.check}>
                    <label htmlFor="men">Мужчинам</label>
                    <input
                        type="checkbox"
                        checked={filters.gender == 'Men'}
                        onChange={() => onChangeGender('Men')}
                        id="men"
                    />
                </div>
                <div className={styles.check}>
                    <label htmlFor="women">Женщинам</label>
                    <input
                        type="checkbox"
                        checked={filters.gender == 'Women'}
                        onChange={() => onChangeGender('Women')}
                        id="women"
                    />
                </div>
            </div>
            <div className={styles.filter}>
                <div className={styles.head}>
                    <h2>Категории</h2>
                    <button>
                        <ARROW />
                    </button>
                </div>
            </div>
            <AppButton variant="black" type="big">
                Применить
            </AppButton>
        </div>
    )
}

export default FilterProducts
