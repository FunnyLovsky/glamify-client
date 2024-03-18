import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import styles from './Colors.module.scss'

const Colors = () => {
    const { productDetail } = useAppSelector((state) => state.productReducer)

    return (
        <div className={styles.cont}>
            <p className={styles.title}>Выберите цвет</p>
            <div className={styles.colors}>
                {productDetail.colors.map((color) => (
                    <div style={{ background: color.code }} key={color.code}></div>
                ))}
            </div>
        </div>
    )
}

export default Colors
