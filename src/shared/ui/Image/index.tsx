import { FC, memo, useState } from 'react'
import styles from './Image.module.scss'
import { SERVER_URL } from '@/shared/const/URL'
import NOT_FOUND from '@/shared/assets/icons/image.svg'

interface IProps {
    src: string
}

const Image: FC<IProps> = ({ src }) => {
    const [isLoad, setIsLoad] = useState(true)
    const [error, setError] = useState(false)

    return (
        <div className={styles.img} style={{ animation: (!isLoad || error) && 'none' }}>
            {error ? (
                <div className={styles.not_found}>
                    <NOT_FOUND />
                </div>
            ) : (
                <img
                    src={`${SERVER_URL}/${src}`}
                    alt=""
                    onLoad={() => setIsLoad(false)}
                    onError={() => setError(true)}
                    loading="lazy"
                    className={isLoad ? styles.img_loading : styles.img_load}
                />
            )}
        </div>
    )
}

export default memo(Image)
