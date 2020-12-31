import { Block } from "../../core/Block.js";
import { loaderTmplRender } from "./Loader.tmpl.js";
import { store } from "../../core/store/store.js";
import { isEqual } from "../../utils/common.utils.js";
export class Loader extends Block {
    constructor() {
        super("div", { className: 'loader' });
        store.subscribe(() => {
            /**
             * TODO: в будущем перевести на внутренний стейт, т.к. изменять
             * props компонента можно только снаружи компонента, они должны быть
             * иммутабельны
             */
            this.setProps(store.value.loader);
        });
    }
    componentDidUpdate(oldProps, newProps) {
        var _a, _b;
        if (newProps.active)
            (_a = this._element) === null || _a === void 0 ? void 0 : _a.classList.add('loader_active');
        else
            (_b = this._element) === null || _b === void 0 ? void 0 : _b.classList.remove('loader_active');
        return !isEqual(oldProps, newProps);
    }
    render() {
        return loaderTmplRender(this.props);
    }
}
