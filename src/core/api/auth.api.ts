import { HTTP } from "./Api.js"
import { BaseAPI } from "./base.api.js"

export interface ISignup {
    first_name: string
    second_name: string
    login: string
    email: string
    password: string
    phone: string
}

export interface ISignin {
    login: string
    password: string
}

export interface ICurrentUserInfo {   
    id: number
    first_name: string
    second_name: string
    display_name: string
    login: string
    email: string
    phone: string
    avatar: string
}

const authAPIInstance = new HTTP('/auth')

export class AuthAPI extends BaseAPI {
    static signup(data: ISignup) {
        return authAPIInstance.post('/signup', { data })
    }

    static signin(data: ISignin) {
        return authAPIInstance.post('/signin', { data })
    }

    static getCurrentUserInfo() {
        return authAPIInstance.get<string>('/user')
    }

    static logout() {
        return authAPIInstance.post('/logout')
    }
}