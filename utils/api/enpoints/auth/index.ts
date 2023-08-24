import { api } from "../..";
import { AUTH_API } from "../../../../config";
import { AuthSignInFormType } from "../../../../screens/AuthSignIn/types";
import { AuthSignUpFormType } from "../../../../screens/AuthSignUp/types";
import { TokenType } from "../../../../types";

export const login = async (body: AuthSignInFormType) => {
    try {
        const res = await api.post<TokenType>(AUTH_API.login, body);
        return res;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}

export const register = async (body: AuthSignUpFormType) => {
    try{
        const res = await api.post(AUTH_API.register, body);
        return res;
    }
    catch (error){
        console.log(error);
        return false;
    }
}

export const refresh = async () => {
    try{
        const res = await api.post(AUTH_API.refresh);
        return res;
    }
    catch (error){
        console.log(error);
        return false;
    }
}

export const logout = async () => {
    try{
        const res = await api.post(AUTH_API.logout);
        return res;
    }
    catch (error){
        console.log(error);
        return false;
    }
}