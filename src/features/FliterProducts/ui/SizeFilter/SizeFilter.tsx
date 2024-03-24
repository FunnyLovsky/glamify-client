import styles from './SizeFilter.module.scss'
import { FC } from 'react'
import { Filters } from '../../types/Filters'
import Filter from '../Filter/Filter'
import AppButton from '@/shared/ui/AppButton'
import { sizes } from '../../lib/sizes'

interface IProps {
    filters: Filters
    onChange: (value: React.SetStateAction<Filters>) => void
}

const SizeFilter: FC<IProps> = ({ filters, onChange }) => {
    const findSize = (size: string) => {
        return filters.size.find((item) => item === size)
    }

    const onChangeCategory = (sizes: string) => {
        if (findSize(sizes)) {
            onChange((prev) => ({ ...prev, size: [...prev.size.filter((size) => size !== sizes)] }))
        } else {
            onChange((prev) => ({ ...prev, size: prev.size.concat(sizes) }))
        }
        onChange((prev) => ({ ...prev, isApply: false }))
    }

    return (
        <Filter title="Размеры">
            <div className={styles.sizes}>
                {sizes.map((size) => (
                    <AppButton
                        variant={findSize(size) ? 'black' : 'white'}
                        key={size}
                        onClick={() => onChangeCategory(size)}
                    >
                        {size}
                    </AppButton>
                ))}
            </div>
        </Filter>
    )
}

export default SizeFilter
