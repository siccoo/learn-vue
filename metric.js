// Watch properties automatically provide payloads of the new value upon
// change and the old value prior to the change:
//     watch: {
//         property(newVal, oldVal) {
//             // ...
//         }
//     }

new Vue({
    el: '#app',
    data: {
        km: 0,
        m: 0
    }, 
    watch: {
        km() {
            // whenever km changes, this function runs
            this.m = this.km ? this.km * 1000 : 0;
        },
        m() {
            // whenever m changes, this function runs
            this.km = this.m ? this.m / 1000 : 0;
        }
    }
});