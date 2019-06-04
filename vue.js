// THE VUE INSTANCE
// The Vue Instance is the starting point of Vue applications and contains a data property that allows us to bind data from our instance and on to the template.
// The Vue instance is created by declaring the new Vue({}) constructor:
// This is why the source of truth in Vue applications is the data property of a Vue instance. In Vue     applications, we’ll hardly ever find ourselves using methods like document.getElementsByTagName        or document.querySelector('img').setAttribute() and instead use thedata properties of our instances    to drive the changes in the UI.

new Vue ({
    el: "#app",
    data: {
        numbers: [
            {id: 1, value: 1},
            {id: 2, value: 10},
            {id: 3, value: 100},
            {id: 4, value: 1000},
            {id: 5, value: 10000}
        ],
        greeting: "Hello I'm learning Vue.js",
        alertMessage: "",
        cityImage: './images/lagos-image.jpg',
        // user: "Chilaka Michael",
        city: 'Lagos, Nigeria.',
    },
    methods: {
        shuffle() {
            this.numbers = _.shuffle(this.numbers)
        },
        changeCity() {
            if (this.city === "Lagos, Nigeria.") {
                this.city = 'Port Harcourt, Nigeria';
                this.cityImage = "./images/Port-Harcourt.jpg";
            } else {
                this.city = 'Lagos, Nigeria.';
                this.cityImage = "./images/lagos-image.jpg";
            }
        },
        changeGreeting() {
            this.greeting = this.greeting === "Hello I'm learning Vue.js" ? "What happen" : "Hello I'm learning Vue.js";
        },
        alertMessageGreeting() {
            this.alertMessage = "Hey something here please";
        },
        alertEnterGreeting() {
            this.alertMessage = "Hey type and press Enter";
        },
    }  
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               