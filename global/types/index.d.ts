export interface BaseType {
    navigation?: NavigationProp<ParamListBase, string>
}

export type TokenType = {
    token: string,
    refreshToken: string,
}