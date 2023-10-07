import { BaseType } from "global/types"

export interface IAuthSignIn extends BaseType {
}

export type AuthSignInFormType = {
    email: string,
    password: string
}