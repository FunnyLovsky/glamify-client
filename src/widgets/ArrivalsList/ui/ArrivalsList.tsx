import { RoutesName } from '@/app/providers/router'
import styles from './ArrivalsList.module.scss'
import Conatiner from '@/shared/ui/Container'
import AppLink from '@/shared/ui/AppLink'

const ArrivalsList = () => {
    return (
        <Conatiner>
            <div className={styles.cont}>
                <h3 className="title">d</h3>
                <div className="list"></div>
                <AppLink href={RoutesName.ARRIVALS} type="button">
                    Посмотреть все
                </AppLink>
            </div>
        </Conatiner>
    )
}

export default ArrivalsList
