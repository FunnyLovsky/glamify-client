import styles from './AppForm.module.scss'
import { FC } from 'react'
import AppButton from '@/shared/ui/AppButton'
import LoaderBtn from '@/shared/ui/LoaderBtn'
import { IPropsChildren } from '@/shared/types/IComponents'

interface IProps extends IPropsChildren {
    title: string
    error: string | null
    isLoading: boolean
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    btn: string
}
const AppForm: FC<IProps> = ({ children, error, title, onSubmit, isLoading, btn }) => {
    return (
        <>
            <h3>{title}</h3>
            <form onSubmit={onSubmit}>
                {children}
                {isLoading ? (
                    <LoaderBtn variant="button" type="big" />
                ) : (
                    <AppButton variant="black" type="big">
                        {btn}
                    </AppButton>
                )}
            </form>
            <div className={styles.error} style={{ visibility: error ? 'visible' : 'hidden' }}>
                {error && <p>{error}</p>}
            </div>
        </>
    )
}

export default AppForm
