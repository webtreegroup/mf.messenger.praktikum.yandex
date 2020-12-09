import { Button } from "../../components/Button/Button.js";
import { Form } from "../../components/Form/Form.js";
import { InputControl } from "../../components/InputControl/InputControl.js";
import { Block } from "../../core/Block.js";
import { render } from "../../utils/common.utils.js";
import { PROFILE_FORM_PASS_CONTROLS } from "./Profile.consts.js";
import { profileEditTmplRender } from "./ProfileEdit.tmpl.js";
const fields = PROFILE_FORM_PASS_CONTROLS.map(el => new InputControl(Object.assign(Object.assign({}, el), { isTouched: true })));
const btnSubmit = new Button({ text: 'Сохранить', btnType: 'submit' });
const profileEditForm = new Form({}, [...fields, btnSubmit]);
const Profile = new Block('div', { className: 'profile-page' }, [profileEditForm], profileEditTmplRender);
render(".app", Profile);
//# sourceMappingURL=ProfileEditPass.js.map