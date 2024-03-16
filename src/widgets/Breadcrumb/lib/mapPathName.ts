import { routePaths } from '../const/routePaths'

export const mapPathName = (pathname: string) => {
    return pathname
        .split('/')
        .filter((path) => routePaths[`/${path}`])
        .map((path) => ({
            to: `/${path}`,
            title: routePaths[`/${path}`],
        }))
}
