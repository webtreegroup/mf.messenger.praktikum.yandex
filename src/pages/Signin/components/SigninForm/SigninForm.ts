import { IState } from "../../../../App.types.js"
import { Button } from "../../../../components/Button/Button.js"
import { Form } from "../../../../components/Form/Form.js"
import { InputControl } from "../../../../components/InputControl/InputControl.js"
import { Link } from "../../../../components/Link/Link.js"
import { ROUTES } from "../../../../core/router/Router.config.js"
import { LOGIN_FORM_CONTROLS } from "./SigninForm.config.js"
import { loginFormTmplRender } from "./SigninForm.tmpl.js"
import { ISigninForm } from "./SigninForm.types.js"

export class SigninForm extends Form {
    constructor(props?: ISigninForm){
        const controls = LOGIN_FORM_CONTROLS.map(el => new InputControl(el))
        const BtnSubmit = new Button({ text: 'Авторизоваться', btnType: 'submit' })
        const SignupLink = new Link({
            path: ROUTES.SIGNUP.path,
            title: ROUTES.SIGNUP.title,
        })

        super(
            props, 
            { 
                'fields': [...controls, BtnSubmit],
                'SignupLink': SignupLink,
            }
        )
    }

    onSubmit(request: IState){
        this.props.onSignin(request)
    }

    render() {
        return loginFormTmplRender()
    }
}