import { IButton } from "./Button.model"
import { Block } from "../../Block.js"
import { buttonTmplRender } from "./Button.tmpl.js"

export class Button extends Block<HTMLButtonElement> {
    constructor(props: IButton) {
        super("button", props)
    }

    createResources({ className = 'btn_primary', btnType = 'button' }: IButton) {
        this._element?.classList.add('btn', className)
        this._element?.setAttribute('type', btnType)
    }

    render() {
        return buttonTmplRender(this.props)
    }
}