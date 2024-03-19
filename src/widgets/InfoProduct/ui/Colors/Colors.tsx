import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import styles from './Colors.module.scss'
import CHECKED from '@/shared/assets/elements/checked.svg'
import { FC } from 'react'
import LoaderBtn from '@/shared/ui/LoaderBtn'

type Product = { color: string; size: string }

interface IProps {
    product: Product
    onChange: (color: string) => void
}

const Colors: FC<IProps> = ({ onChange, product }) => {
    const { productDetail } = useAppSelector((state) => state.productReducer)
    const { isLoading } = useAppSelector((state) => state.cartReducer)
    const { isLoading: authLoading } = useAppSelector((state) => state.authReducer)

    const renderContent = () => {
        if (isLoading || authLoading) {
            return (
                <>
                    <LoaderBtn variant="circle" />
                    <LoaderBtn variant="circle" />
                    <LoaderBtn variant="circle" />
                </>
            )
        }

        return (
            <>
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
            </>
        )
    }

    return (
        <div className={styles.cont}>
            <p className={styles.title}>Выберите цвет</p>
            <div className={styles.colors}>{renderContent()}</div>
        </div>
    )
}

export default Colors
