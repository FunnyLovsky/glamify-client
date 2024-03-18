import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import styles from './Sizes.module.scss'
import { FC } from 'react'
import AppButton from '@/shared/ui/AppButton'

type Product = { color: string; size: string }

interface IProps {
    product: Product
    onChange: (size: string) => void
}

const Sizes: FC<IProps> = ({ onChange, product }) => {
    const { productDetail } = useAppSelector((state) => state.productReducer)

    return (
        <div className={styles.cont}>
            <p className={styles.title}>Выберите размер</p>
            <div className={styles.sizes}>
                {productDetail.sizes.map((size) => (
                    <AppButton
                        key={size}
                        onClick={() => onChange(size)}
                        variant={product.size == size ? 'black' : 'white'}
                    >
                        {size}
                    </AppButton>
                ))}
            </div>
        </div>
    )
}

export default Sizes
