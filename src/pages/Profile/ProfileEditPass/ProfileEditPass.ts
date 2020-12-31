import { Link } from "../../../components/Link/Link.js"
import { Block } from "../../../core/Block.js"
import { ROUTES } from "../../../core/router/Router.config.js"
import { ProfileEditPassFormContainer } from "./components/ProfileEditPassForm/ProfileEditPassFormContainer.js"
import { profileEditPassTmplRender } from "./ProfileEditPass.tmpl.js"

export class ProfileEditPass extends Block<HTMLDivElement> {
    constructor() {
        const ProfileEditPassForm = new ProfileEditPassFormContainer()
        const ChatsLink = new Link({ 
            path: ROUTES.CHATS.path,
            title: `
                <svg id="Layer" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><path fill="#3369F3" d="m54 30h-39.899l15.278-14.552c.8-.762.831-2.028.069-2.828-.761-.799-2.027-.831-2.828-.069l-17.448 16.62c-.755.756-1.172 1.76-1.172 2.829.0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552.528.0 1.056-.208 1.449-.621.762-.8.731-2.065-.069-2.827l-15.342-14.552h39.962c1.104.0 2-.896 2-2s-.896-2-2-2z"/></svg>
            `
        })
        
        super(
            'main', 
            { className: 'profile-page' }, 
            {
                ChatsLink,
                ProfileEditPassForm: ProfileEditPassForm.createBlock()
            },
            profileEditPassTmplRender
        )
    }
}