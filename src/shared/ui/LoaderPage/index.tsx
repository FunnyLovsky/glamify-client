import { useEffect } from 'react'
import styles from './LoaderPage.module.scss'

const LoaderPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={styles.cont}>
            <span className={styles.loader}></span>
        </div>
    )
}

export default LoaderPage
