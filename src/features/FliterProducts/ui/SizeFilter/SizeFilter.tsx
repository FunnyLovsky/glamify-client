// import styles from './FilterProducts.module.scss'
import { FC } from 'react'
import { Filters } from '../../types/Filters'
import Filter from '../Filter/Filter'
import AppButton from '@/shared/ui/AppButton'
import { sizes } from '../../lib/sizes'
import { Sizes } from '../../types/Sizes'

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
    }

    return (
        <Filter title="Размеры">
            {sizes.map((size) => (
                <AppButton
                    variant={findSize(size) ? 'black' : 'white'}
                    key={size}
                    onClick={() => onChangeCategory(size)}
                >
                    {size}
                </AppButton>
            ))}
        </Filter>
    )
}

export default SizeFilter
