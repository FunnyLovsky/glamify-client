import styles from './Loader.module.scss'

const Loader = () => {
    return (
        <span className={styles.product}>
            <div className={styles.img}></div>
            <div className={styles.name}></div>
            <div className={styles.rating}></div>
            <div className={styles.price}></div>
        </span>
    )
}

export default Loader
