import { isEqual, render } from "../../utils/common.utils.js";
import { EventBus } from "./EventBus.js";
export class Block {
    constructor(tagName, props = {}, children = {}, baseTmplRender) {
        this._element = null;
        this.setProps = (nextProps) => {
            if (!nextProps)
                return;
            Object.assign(this.props, nextProps);
        };
        this._meta = {
            tagName,
            props
        };
        this._children = children;
        this.props = this._makePropsProxy(props);
        this._baseTmplRender = baseTmplRender;
        this.eventBus = new EventBus();
        this._registerEvents(this.eventBus);
        this.eventBus.emit(Block.EVENTS.INIT, this.props);
    }
    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }
    init(props) {
        this._createResources(props);
        this.eventBus.emit(Block.EVENTS.FLOW_CDM);
    }
    _createResources(props) {
        var _a;
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
        if (props.className)
            (_a = this._element) === null || _a === void 0 ? void 0 : _a.classList.add(props.className);
        this.createResources(props);
    }
    createResources(_props) { }
    _createDocumentElement(tagName) {
        return document.createElement(tagName);
    }
    _componentDidMount() {
        this.componentDidMount();
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
    componentDidMount() { }
    _componentDidUpdate(oldProps, newProps) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (response)
            this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
    componentDidUpdate(oldProps, newProps) {
        return !isEqual(oldProps, newProps);
    }
    get element() {
        return this._element;
    }
    _render() {
        if (!this._element)
            return;
        const block = this.render();
        this._element.innerHTML = block || '';
        Object.keys(this._children).map(componentKey => {
            var _a;
            const components = this._children[componentKey];
            if (!components)
                return;
            const componentsContainer = (_a = this._element) === null || _a === void 0 ? void 0 : _a.querySelector(`[data-component="${componentKey}"]`);
            const appendTarget = componentsContainer ? componentsContainer : this._element;
            if (Array.isArray(components)) {
                components.map(el => appendTarget === null || appendTarget === void 0 ? void 0 : appendTarget.appendChild(el.content));
            }
            else {
                appendTarget === null || appendTarget === void 0 ? void 0 : appendTarget.appendChild(components.content);
            }
        });
    }
    render() {
        var _a;
        return (_a = this._baseTmplRender) === null || _a === void 0 ? void 0 : _a.call(this, this.props);
    }
    get content() {
        return this.element;
    }
    _makePropsProxy(props) {
        const self = this;
        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target, prop, value) {
                const oldProps = Object.assign({}, self.props);
                target[prop] = value;
                self.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProps, target);
                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа");
            }
        });
    }
    hide() {
        var _a;
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.remove();
    }
    show(rootQuery) {
        render(rootQuery, this);
    }
}
Block.EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render",
    FLOW_CDU: "flow:component-did-update",
};
//# sourceMappingURL=Block.js.map