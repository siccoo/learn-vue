
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


// For components, data should always be a function that returns an object.
let componentObject = {
    template: '<p>{{message}}</p>',
    data() {
        return {
            message: 'Greetings!'
        }
    }
}

let counterOne = {
    template: `
        <button class="component-button" @click="counter++">
            You clicked me {{counter}} times
        </button>
    `,
    data() {
        return {
            counter: 0
        }
    }
}

let counterTwo = {
    template: `
        <button class="component-button" @click="counter++">
            You clicked me {{counter}} times
        </button>
    `,
    data() {
        return {
            counter: 0
        }
    }
}

let counterThree = {
    template: `
        <button class="component-button" @click="counter++">
            You clicked me {{counter}} times
        </button>
    `,
    data() {
        return {
            counter: 0
        }
    }
}

new Vue({
    el: '#app',
    data: {
        message: 'Dora and Moya are mates'
    },
    components: {
        'counter-one': counterOne,
        'counter-two': counterTwo,
        'counter-three': counterThree
    }
});