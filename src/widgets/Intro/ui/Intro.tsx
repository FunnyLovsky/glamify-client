import { RoutesName } from '@/app/providers/router'
import styles from './Intro.module.scss'
import Conatiner from '@/shared/ui/Container'
import AppLink from '@/shared/ui/AppLink'

const Intro = () => {
    return (
        <div className={styles.intro}>
            <Conatiner>
                <div className={styles.intro_cont}>
                    <h1 className={styles.title}>
                        Найди одежду, которая соответствует твоему стилю
                    </h1>
                    <p className={styles.subtitle}>
                        Познакомьтесь с нашим разнообразным ассортиментом тщательно изготовленной
                        одежды, созданной для выражения вашей индивидуальности и удовлетворения
                        вашего стиля.
                    </p>

                    <AppLink href={RoutesName.SHOP} type="button">
                        За покупками
                    </AppLink>

                    <div className={styles.results}>
                        <div className={styles.result_item}>
                            <div className={styles.count}>200+</div>
                            <div className={styles.descrip}>Международных Брендов</div>
                        </div>
                        <div className={styles.result_item}>
                            <div className={styles.count}>2,000+</div>
                            <div className={styles.descrip}>Продуктов Высокого Качества</div>
                        </div>
                        <div className={styles.result_item}>
                            <div className={styles.count}>30,000+</div>
                            <div className={styles.descrip}>Довольных Клиентов</div>
                        </div>
                    </div>
                </div>
            </Conatiner>
        </div>
    )
}

export default Intro
