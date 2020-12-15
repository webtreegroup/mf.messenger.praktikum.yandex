import { Button } from "../../../../components/Button/Button.js"
import { Form } from "../../../../components/Form/Form.js"
import { InputControl } from "../../../../components/InputControl/InputControl.js"
import { IPopup } from "../../../../components/Popup/Popup.types.js"
import { LOGIN_FORM_CONTROLS } from "./SigninForm.config.js"
import { loginFormTmplRender } from "./SigninForm.tmpl.js"

export class LoginForm extends Form {
    constructor(props?: IPopup){
        const controls = LOGIN_FORM_CONTROLS.map(el => new InputControl(el))
        const BtnSubmit = new Button({ text: 'Авторизоваться', btnType: 'submit' })

        super(props, [...controls, BtnSubmit])
    }

    render() {
        return loginFormTmplRender()
    }
}