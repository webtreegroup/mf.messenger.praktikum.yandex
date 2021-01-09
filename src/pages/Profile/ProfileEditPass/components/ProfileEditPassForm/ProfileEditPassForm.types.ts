import { IComponent } from '../../../../../App.types';
import { IChangePassword } from '../../../../../core/api/profile.api'

export interface IProfileEditPass extends IComponent {
    onProfilePasswordChange: (request: IChangePassword) => void
}
