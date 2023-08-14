import { BaseType } from "../../../types"

export interface IAuthSignUp extends BaseType {
}

export type AuthSignUpFormType = {
    nickname:  string,
    email: string,
    password: string
}