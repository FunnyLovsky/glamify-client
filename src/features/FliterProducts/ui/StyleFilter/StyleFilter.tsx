// import { FC } from 'react'
// import { Filters } from '../../types/Filters'

// interface IProps {
//     filters: Filters
//     onChange: (value: React.SetStateAction<Filters>) => void
// }

// const StyleFilter: FC<IProps> = ({ filters, onChange }) => {
//     const findStyle = (style: string) => {
//         return filters.style.find((item) => item === style)
//     }

//     const onChangeStyle = (style: string) => {
//         if (findStyle(style)) {
//             onChange((prev) => ({
//                 ...prev,
//                 style: [...prev.style.filter((item) => item !== style)],
//             }))
//         } else {
//             onChange((prev) => ({ ...prev, style: prev.style.concat(style) }))
//         }
//     }

//     return <p>s</p>
// }

// export default StyleFilter
