// THE VUE INSTANCE
// The Vue Instance is the starting point of Vue applications and contains a data property      that allows us to bind data from our instance and on to the template.

new Vue ({
    el: "#app",
    data: {
        greeting: "Hello I'm learning Vue.js",
        user: "Chilaka Michael",
        city: "Lagos, Nigeria.",
    },
    methods: {
        changeGreeting() {
            this.greeting = this.greeting === "Hello I'm learning Vue.js" ? "What happen" : "Hello I'm learning Vue.js"
        }
    },
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               