import { InputControl } from "../../components/InputControl/InputControl.js";
import { Popup } from "../../components/Popup/Popup.js";
import { Block } from "../../core/Block.js";
import { render } from "../../utils/common.utils.js";
import { PROFILE_FORM_CONTROLS } from "./Profile.consts.js";
import { profileTmplRender } from "./Profile.tmpl.js";
const fields = PROFILE_FORM_CONTROLS.map(el => new InputControl(Object.assign(Object.assign({}, el), { disabled: true, isTouched: true })));
const editUserImgPopup = new Popup({ title: 'Загрузите файл' });
const Profile = new Block('div', { className: 'profile-page' }, { 'Fields': fields, 'Popups': editUserImgPopup }, profileTmplRender);
render(".app", Profile);
//# sourceMappingURL=Profile.js.map