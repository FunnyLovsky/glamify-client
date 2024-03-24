// import styles from './FilterProducts.module.scss'
import { useLocation } from 'react-router-dom'
import { FC } from 'react'
import { Filters } from '../../types/Filters'
import Filter from '../Filter/Filter'
import Checkbox from '../Checkbox/Checkbox'

interface IProps {
    filters: Filters
    onChange: (value: React.SetStateAction<Filters>) => void
}

const GenderFliter: FC<IProps> = ({ filters, onChange }) => {
    const { search } = useLocation()
    const searchParams = new URLSearchParams(search)
    const gender = searchParams.get('gender')

    const onChangeGender = (gender: 'Men' | 'Women') => {
        if (gender == filters.gender) {
            onChange((prev) => ({ ...prev, gender: '' }))
        } else {
            onChange((prev) => ({ ...prev, gender }))
        }
        onChange((prev) => ({ ...prev, isApply: false }))
    }

    return (
        <>
            {!gender && (
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
            )}
        </>
    )
}

export default GenderFliter
