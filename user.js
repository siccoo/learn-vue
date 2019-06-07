
new Vue({
    el: '#app',
    data: {
        name: 'Loading...',
        email: 'Loading...',
        company: {
            name: 'Loading...',
            catchPhrase: 'Loading...'
        }
    },
    created() {
        // instance has been created
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            const data = response.data;
            const randomUser = response.data[
                Math.floor(Math.random() * data.length)
            ];
            this.name = randomUser.name;
            this.email = randomUser.email;
            this.company.name = randomUser.company.name;
            this.company.catchPhrase = randomUser.company.catchPhrase;
        });
    },
    mounted() {
        // instance has been mounted
        console.log(this.$el)
    }, 
    updated() {
        // instance has been updated
        console.log(this.$el)
    }, 
    destroyed() {
        // instance has been destroyed
        console.log(this.$el)
    }
});