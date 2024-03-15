export interface IRoute {
    path?: string
    element: React.ReactNode
    index?: boolean
    children?: IRoute[]
}
