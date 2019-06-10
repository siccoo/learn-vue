
Vue.component('global-component', {
    template: `<p>Hello Moya!!!</p>`
});

new Vue({
    template: `
        <div>
            <global-component></global-component>
        </div>
    `
});

const localComponent = {
    template: `<p>Hello Moya!!!</p>`
}

new Vue({
    template: `
        <div>
            <local-component></local-component>
        </div>
    `,
    components: {
        'local-component': localComponent
    }
});