import { Block } from "../../core/Block.js"
import { IInputControl } from "./InputControl.model.js"
import { inputControlTmplRender } from "./InputControl.tmpl.js"

export class InputControl extends Block<HTMLInputElement> {
    constructor(props: IInputControl) {
        super("div", props)

        this.handleControlChangeOrFocus = this.handleControlChangeOrFocus.bind(this)

        this._element?.addEventListener('focus', this.handleControlChangeOrFocus)
        this._element?.addEventListener('input', this.handleControlChangeOrFocus)
    }

    handleControlChangeOrFocus(e: Event) {
        const elem = e.target as HTMLInputElement
        const currentValue = elem?.value
    
        if (currentValue) {
            elem.classList.add('touched')
        } else {
            elem.classList.remove('touched')
        }
    }

    createResources({ isTouched }: IInputControl) {
        this._element?.classList.add('input-control')
        if (isTouched) this._element?.querySelector('input')?.classList.add('touched')
    }

    render() {
        return inputControlTmplRender(this.props)
    }
}
