import styles from './ColorFilter.module.scss'
import { FC } from 'react'
import { Filters } from '../../types/Filters'
import Filter from '../Filter/Filter'
import { colors } from '../../lib/colors'
import { ColorBtn } from '@/entities/Product'

interface IProps {
    filters: Filters
    onChange: (value: React.SetStateAction<Filters>) => void
}

const ColorFilter: FC<IProps> = ({ filters, onChange }) => {
    const findColor = (color: string) => {
        return filters.color.find((item) => item === color)
    }

    const onChangeColor = (color: string) => {
        if (findColor(color)) {
            onChange((prev) => ({
                ...prev,
                color: [...prev.color.filter((item) => item !== color)],
            }))
        } else {
            onChange((prev) => ({ ...prev, color: prev.color.concat(color) }))
        }

        onChange((prev) => ({ ...prev, isApply: false }))
    }

    return (
        <Filter title="Цвета">
            <div className={styles.colors}>
                {colors.map((color) => (
                    <ColorBtn
                        key={color.code}
                        check={!!findColor(color.name)}
                        color={color}
                        onChange={onChangeColor}
                    />
                ))}
            </div>
        </Filter>
    )
}

export default ColorFilter
