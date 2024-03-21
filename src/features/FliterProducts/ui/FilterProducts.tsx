import styles from './FilterProducts.module.scss'
import { useLocation } from 'react-router-dom'
import ARROW from '@/shared/assets/elements/arrow.svg'

const FilterProducts = () => {
    const { pathname, search } = useLocation()

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
            </div>
            <div className={styles.filter}>
                <div className={styles.head}>
                    <h2>Категории</h2>
                    <button>
                        <ARROW />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FilterProducts
