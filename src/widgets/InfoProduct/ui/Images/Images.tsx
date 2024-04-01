/* eslint-disable react-hooks/exhaustive-deps */
import { useAppSelector } from '@/app/providers/StoreProvider/lib/hooks'
import styles from './Images.module.scss'
import { FC, useEffect, useState } from 'react'
import Image from '@/shared/ui/Image'

type Product = { color: string; size: string }

interface IProps {
    product: Product
}

const Images: FC<IProps> = ({ product }) => {
    const { productDetail } = useAppSelector((state) => state.productReducer)
    const colors = productDetail.colors.find((color) => color.name == product.color)
    const imgs = colors.images

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
                        <Image src={img} />
                    </button>
                ))}
            </div>
            <div className={styles.main}>
                <Image src={selectImg} />
            </div>
        </div>
    )
}

export default Images
