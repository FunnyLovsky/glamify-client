import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import styles from './InfoProduct.module.scss'
import Conatiner from '@/shared/ui/Container'
import LoaderPage from '@/shared/ui/LoaderPage'
import { useEffect } from 'react'
import { Info, Price, clearProduct } from '@/entities/Product'
import Images from '../Images/Images'
import Colors from '../Colors/Colors'

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
                <Images />
                <div className={styles.info}>
                    <Info data={productDetail} type="big" />
                    <Price data={productDetail} type="big" />
                    <p className={styles.description}>{productDetail.description}</p>
                    <Colors />
                    <p>Выберите размер:</p>
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
