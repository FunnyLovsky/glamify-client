/* eslint-disable react-hooks/exhaustive-deps */
import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import styles from './Images.module.scss'
import { SERVER_URL } from '@/shared/const/URL'
import { FC, useEffect, useState } from 'react'

type Product = { color: string; size: string }

interface IProps {
    product: Product
}

const Images: FC<IProps> = ({ product }) => {
    const { productDetail } = useAppSelector((state) => state.productReducer)
    const colors = productDetail.colors.find((color) => color.name == product.color)
    const imgs = colors.images.map((img) => `${SERVER_URL}/${img}`)

    const [selectImg, setSelectImg] = useState(imgs[0])
    useEffect(() => {
        setSelectImg(imgs[0])
    }, [product])

    const onChangeImg = (img: string) => {
        setSelectImg(img)
    }

    return (
        <div className={styles.imgs}>
            <div className={styles.btns}>
                {imgs.map((img: string) => (
                    <button
                        key={Math.random() * 12}
                        onClick={() => onChangeImg(img)}
                        className={img == selectImg ? styles.active : styles.btn}
                    >
                        <img src={img} alt={img} />
                    </button>
                ))}
            </div>
            <div className={styles.main}>
                <img src={selectImg} alt={selectImg} />
            </div>
        </div>
    )
}

export default Images
