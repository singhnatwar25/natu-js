type Routes = { [key: string]: () => HTMLElement };

export function createRouter(routes: Routes) {
    function renderRoute() {
        const path = location.hash.slice(1) || '/';
        const component = routes[path];
        const app = document.getElementById('app');
        if (app && component) {
            app.innerHTML = '';
            app.appendChild(component());
        }
    }
    window.addEventListener('hashchange', renderRoute);
    window.addEventListener('load', renderRoute);
}
