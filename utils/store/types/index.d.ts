export interface IAuthData {
    nickname: string;
    email: string;
    password: string;
}

export interface IPersonalInformationData {
    firstName:  string,
    lastName: string,
    birthday: string,
    gender: string,
}

export interface IRegisterDataState {
    auth: IAuthData,
    personalInformationData: IPersonalInformationData,
}