export function buildRoutePath(path) {
    const routeParametersRegex = /:([a-zA-]+)/g

    const pathWithParams = pa.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)')

    const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`)

    return pathRegex
}