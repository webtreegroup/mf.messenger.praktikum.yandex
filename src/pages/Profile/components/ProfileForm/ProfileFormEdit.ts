import { Button } from "../../../../components/Button/Button.js"
import { Form } from "../../../../components/Form/Form.js"
import { InputControl } from "../../../../components/InputControl/InputControl.js"
import { PROFILE_FORM_CONTROLS } from "./ProfileForm.config.js"

const fields = PROFILE_FORM_CONTROLS.map(el => new InputControl({ ...el, isTouched: true }))
const BtnSubmit = new Button({ text: 'Сохранить', btnType: 'submit' })

export const ProfileFormEdit = new Form(
    { className: 'profile-fields' }, 
    [...fields, BtnSubmit], 
)