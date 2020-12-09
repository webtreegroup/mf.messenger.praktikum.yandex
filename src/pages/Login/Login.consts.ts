import { IInputControl } from "../../components/InputControl/InputControl.model.js"

export const LOGIN_FORM_CONTROLS: IInputControl[] = [
    { name: 'login', label: 'Логин', required: true },
    { name: 'password', label: 'Пароль', inputType: 'password', required: true },
]