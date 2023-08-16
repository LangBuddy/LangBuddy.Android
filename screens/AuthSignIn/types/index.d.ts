import { BaseType } from "../../../types"

export interface IAuthSignIn extends BaseType {
}

export type AuthSignInFormType = {
    email: string,
    password: string
}