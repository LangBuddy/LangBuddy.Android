import { BaseType } from "global/types"

export interface IAuthSignUp extends BaseType {
}

export type AuthSignUpFormType = {
    nickname:  string,
    email: string,
    password: string
}