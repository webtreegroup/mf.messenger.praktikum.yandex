import { Button } from "./components/Button/Button.js";
import { Popups } from "./components/Popup/Popup.js";
// popups
const editUserImagePopup = new Popups('edit-user-image');
const addUserPopup = new Popups('add-user');
const removeUserPopup = new Popups('remove-user');
const editUserImageBtn = document.querySelector('.edit-user-image');
editUserImageBtn === null || editUserImageBtn === void 0 ? void 0 : editUserImageBtn.addEventListener('click', function (e) {
    e.preventDefault();
    editUserImagePopup.show();
});
const addUserBtn = document.querySelector('.add-user');
addUserBtn === null || addUserBtn === void 0 ? void 0 : addUserBtn.addEventListener('click', function (e) {
    e.preventDefault();
    addUserPopup.show();
});
const removeUserBtn = document.querySelector('.remove-user');
removeUserBtn === null || removeUserBtn === void 0 ? void 0 : removeUserBtn.addEventListener('click', function (e) {
    e.preventDefault();
    removeUserPopup.show();
});
// forms
const forms = document.querySelectorAll('.ajax-form');
forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const requestForConsole = {};
        const formData = new FormData(form);
        for (const [key, value] of formData.entries()) {
            requestForConsole[key] = value;
        }
        console.log(requestForConsole);
    });
});
function render(query, block) {
    const root = document.querySelector(query);
    const appendBlock = block.getContent();
    if (!appendBlock)
        return;
    root === null || root === void 0 ? void 0 : root.appendChild(appendBlock);
    return root;
}
const button = new Button({
    text: 'Click me',
});
// app — это id дива в корне DOM
render(".index-page", button);
// Через секунду контент изменится сам, достаточно обновить пропсы
setTimeout(() => {
    button.setProps({
        text: 'Click me, please',
    });
}, 1000);
//# sourceMappingURL=App.js.map