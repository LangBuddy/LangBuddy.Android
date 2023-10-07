import { BaseType } from "global/types";

interface IAuthPersonalInformation extends BaseType{
    
}

export type AuthPersonalInformationType = {
    firstName:  string,
    lastName: string,
    birthday: string,
    gender: string,
}