import { Block } from "../../core/Block.js";
import { store } from "../../core/store/store.js";
import { ChatHistory } from "./components/ChatHistory/ChatHistory.js";
import { ChatsAside } from "./components/ChatsAside/ChatsAside.js";
export class Chats extends Block {
    constructor(props) {
        super('main', Object.assign(Object.assign({}, props), { className: 'chats-page' }), [
            new ChatsAside({ className: 'chats', chats: store.value.chats }),
            new ChatHistory()
        ]);
    }
    componentDidMount() {
        var _a;
        (_a = this.props) === null || _a === void 0 ? void 0 : _a.onLoadChats();
    }
}
