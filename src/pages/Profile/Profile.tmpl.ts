export const profileTmplRender = (): string => `
    <aside class="profile-page__out">
        <a href="./index.html"><svg id="Layer" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><path fill="#3369F3" d="m54 30h-39.899l15.278-14.552c.8-.762.831-2.028.069-2.828-.761-.799-2.027-.831-2.828-.069l-17.448 16.62c-.755.756-1.172 1.76-1.172 2.829.0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552.528.0 1.056-.208 1.449-.621.762-.8.731-2.065-.069-2.827l-15.342-14.552h39.962c1.104.0 2-.896 2-2s-.896-2-2-2z"/></svg></a>
    </aside>

    <main class="profile-options" data-component="Popups">
        <header class="profile-options__image">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.8 460.8" style="enable-background:new 0 0 460.8 460.8"><g><g><path d="M230.432.0c-65.829.0-119.641 53.812-119.641 119.641s53.812 119.641 119.641 119.641 119.641-53.812 119.641-119.641S296.261.0 230.432.0z"/></g></g><g><g><path d="M435.755 334.89c-3.135-7.837-7.314-15.151-12.016-21.943-24.033-35.527-61.126-59.037-102.922-64.784-5.224-.522-10.971.522-15.151 3.657-21.943 16.196-48.065 24.555-75.233 24.555s-53.29-8.359-75.233-24.555c-4.18-3.135-9.927-4.702-15.151-3.657-41.796 5.747-79.412 29.257-102.922 64.784-4.702 6.792-8.882 14.629-12.016 21.943-1.567 3.135-1.045 6.792.522 9.927 4.18 7.314 9.404 14.629 14.106 20.898 7.314 9.927 15.151 18.808 24.033 27.167 7.314 7.314 15.673 14.106 24.033 20.898 41.273 30.825 90.906 47.02 142.106 47.02s100.833-16.196 142.106-47.02c8.359-6.269 16.718-13.584 24.033-20.898 8.359-8.359 16.718-17.241 24.033-27.167 5.224-6.792 9.927-13.584 14.106-20.898C436.8 341.682 437.322 338.024 435.755 334.89z"/></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
        </header>

        <section class="profile-options__fields" data-component="ProfileForm"></section>

        <footer class="profile-options__actions">
            <ul>
                <li data-component="ToggleEditUserImgPopup"></li>
                <li data-component="ProfileEditLink"></li>
                <li data-component="ProfileEditPasswordLink"></li>
                <li data-component="ProfileLogout"></li>
            </ul>
        </footer>
    </main>

`