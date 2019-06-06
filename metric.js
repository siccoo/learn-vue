// Watch properties automatically provide payloads of the new value upon
// change and the old value prior to the change:
//     watch: {
//         property(newVal, oldVal) {
//             // ...
//         }
//     }

// new Vue({
//     el: '#app',
//     data: {
//         km: 0,
//         m: 0
//     }, 
//     watch: {
//         km() {
            // whenever km changes, this function runs
        //     this.m = this.km ? this.km * 1000 : 0;
        // },
        // m() {
            // whenever m changes, this function runs
//             this.km = this.m ? this.m / 1000 : 0;
//         }
//     }
// });

// WATCHERS VS. COMPUTED PROPERTIES
// We could build the same application without the use of watchers and
// instead use computed properties. We know computed properties allow us
// to compute a new property from an existing data property.

new Vue({
    el: '#app',
    data: {
        km: 0,
        m: 0
    },
    computed: {
        m: {
            get() {
                return this.km * 1000;
            },
            set(newValue) {
                return this.km = newValue/1000;
            }
        }
    }
})