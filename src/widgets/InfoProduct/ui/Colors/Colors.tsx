import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import styles from './Colors.module.scss'
import CHECKED from '@/shared/assets/elements/checked.svg'
import { FC } from 'react'

type Product = { color: string; size: string }

interface IProps {
    product: Product
    onChange: (color: string) => void
}

const Colors: FC<IProps> = ({ onChange, product }) => {
    const { productDetail } = useAppSelector((state) => state.productReducer)

    // const productDetail = {
    //     colors: [
    //         { name: 'Blue', code: '#0000ff' },
    //         { name: 'Green', code: '#25ba26' },
    //     ],
    // }

    return (
        <div className={styles.cont}>
            <p className={styles.title}>Выберите цвет</p>
            <div className={styles.colors}>
                {productDetail.colors.map((color) => (
                    <button
                        style={{ background: color.code }}
                        key={color.code}
                        className={styles.color_item}
                        onClick={() => onChange(color.name)}
                    >
                        {product.color == color.name && <CHECKED />}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Colors
