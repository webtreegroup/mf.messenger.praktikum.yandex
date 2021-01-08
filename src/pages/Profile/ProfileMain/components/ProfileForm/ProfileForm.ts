import { InputControl } from "../../../../../components/InputControl/InputControl"
import { ICurrentUserInfo } from "../../../../../core/api/auth.api"
import { Block } from "../../../../../core/block/Block"
import { IProfileEditForm } from "../../../ProfileEdit/components/ProfileEditForm/ProfileEditForm.types"
import { PROFILE_FORM_CONTROLS } from "./ProfileForm.config"

class ProfileForm extends Block<HTMLDivElement, IProfileEditForm> {
    constructor(props?: IProfileEditForm) {
        super(
            'div', 
            { 
                ...props,
                className: 'profile-fields' 
            }, 
        )
    }

    render(){
        const currentUserInfo = this.props.currentUserInfo

        if (!currentUserInfo) return

        const fields = PROFILE_FORM_CONTROLS.map(el => {
            const valueKey = el.name as keyof ICurrentUserInfo
            const value = currentUserInfo[valueKey]

            return new InputControl({ 
                ...el,
                value: value || '-',
                disabled: true, 
                isTouched: true
            })
        })

        this._children = {
            ...this._children,
            root: fields,
        }
    }
}

export default new ProfileForm()