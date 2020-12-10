import { Button } from "../../../../components/Button/Button.js";
import { Form } from "../../../../components/Form/Form.js";
import { InputControl } from "../../../../components/InputControl/InputControl.js";
import { PROFILE_FORM_PASS_CONTROLS } from "./ProfileEditPassForm.consts.js";
const fields = PROFILE_FORM_PASS_CONTROLS.map(el => new InputControl(Object.assign(Object.assign({}, el), { isTouched: true })));
const BtnSubmit = new Button({ text: 'Сохранить', btnType: 'submit' });
export const ProfileEditPassForm = new Form({ className: 'profile-fields' }, [...fields, BtnSubmit]);
//# sourceMappingURL=ProfileEditPassForm.js.map