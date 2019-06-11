let xTemplate = {
    template: '#x-template-component',
    props: ['message']
}

new Vue({
    el: '#app',
    data: {
        message: 'Eliora!!!',
    },
    components: {
        'x-temp': xTemplate
    }
});