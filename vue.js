// THE VUE INSTANCE
// The Vue Instance is the starting point of Vue applications and contains a data property that allows us to bind data from our instance and on to the template.
// The Vue instance is created by declaring the new Vue({}) constructor:
// This is why the source of truth in Vue applications is the data property of a Vue instance. In Vue     applications, we’ll hardly ever find ourselves using methods like document.getElementsByTagName        or document.querySelector('img').setAttribute() and instead use thedata properties of our instances    to drive the changes in the UI.

new Vue ({
    el: "#app",
    data: {
        greeting: "Hello I'm learning Vue.js",
        alertMessage: "",
        cityImage: "./images/lagos-image.jpg",
        // user: "Chilaka Michael",
        city: "Lagos, Nigeria.",
    },
    methods: {
        changeCity() {
            if (this.city === "Lagos, Nigeria.") {
                this.city = "Port Harcourt, Nigeria";
                this.cityImage = "./images/Port-Harcourt.jpg";
            } else {
                this.city = "Lagos, Nigeria.";
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