import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import styles from './Images.module.scss'
import { SERVER_URL } from '@/shared/const/URL'

const Images = () => {
    const { productDetail } = useAppSelector((state) => state.productReducer)
    return (
        <div className={styles.imgs}>
            <div className={styles.btns}>
                <button>
                    <img src={`${SERVER_URL}/${productDetail.image}`} alt="" />
                </button>
                <button>
                    <img src={`${SERVER_URL}/${productDetail.image}`} alt="" />
                </button>
                <button>
                    <img src={`${SERVER_URL}/${productDetail.image}`} alt="" />
                </button>
            </div>
            <div className={styles.main}>
                <img src={`${SERVER_URL}/${productDetail.image}`} alt="" />
            </div>
        </div>
    )
}

export default Images
