import { HTTP } from "./Api.js"
import { BaseAPI } from "./base.api.js"

export interface IChangeProfile {
    first_name: string
    second_name: string
    display_name: string
    login: string
    email: string
    phone: string
}

export interface IChangeProfileAvatar {
    file: Blob
}

export interface IChangePassword {
    oldPassword: string
    newPassword: string
}

const profileAPIInstance = new HTTP('/user')

export class ProfileAPI extends BaseAPI {
    static change(data: IChangeProfile) {
        return profileAPIInstance.put('/profile', { data })
    }

    static changeAvatar(data: IChangeProfileAvatar) {
        return profileAPIInstance.put('/profile/avatar', { data })
    }

    static changePassword(data: IChangePassword) {
        return profileAPIInstance.put('/password', { data })
    }
}