import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import styles from './InfoProduct.module.scss'
import Conatiner from '@/shared/ui/Container'
import LoaderPage from '@/shared/ui/LoaderPage'
import { useEffect } from 'react'
import { clearProduct } from '@/entities/Product'
import { SERVER_URL } from '@/shared/const/URL'

const InfoProduct = () => {
    const dispatch = useAppDispatch()
    const { error, isLoading, productDetail } = useAppSelector((state) => state.productReducer)

    useEffect(() => {
        if (productDetail.name !== '') {
            document.title = `${productDetail.name} - GLAMIFY`
        }
    }, [productDetail])

    useEffect(() => {
        return () => {
            dispatch(clearProduct())
        }
    }, [dispatch])

    const renderContent = () => {
        if (error) {
            return <h1>{error}</h1>
        }

        if (isLoading) {
            return <LoaderPage />
        }

        return (
            <div className={styles.cont}>
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
                <div className={styles.info}>
                    <h2 className={styles.title}>{productDetail.name}</h2>
                    <p className={styles.rating}>{productDetail.rating}/5</p>
                    <p>{productDetail.description}</p>
                    <p>Colors:</p>
                    {productDetail.colors.map((color) => (
                        <p key={color.code}>
                            {color.name}{' '}
                            <span
                                style={{
                                    display: 'inline-block',
                                    width: 20,
                                    height: 20,
                                    background: color.code,
                                }}
                            ></span>
                        </p>
                    ))}
                    <p>Размеры:</p>
                    {productDetail.sizes.map((size) => (
                        <span key={size}>{size}</span>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <>
            <Conatiner>{renderContent()}</Conatiner>
        </>
    )
}

export default InfoProduct
