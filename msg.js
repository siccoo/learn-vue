// The first time the reverseMessage property is computed, its value is
// cached. With every other call to render the value of reverseMessage , the
// message property hasn’t changed, so the cached result is simply returned
// without running the computed function again.
// If we repeat a similar example but instead call methods multiple times in
// the template, the console.log() message will be run every single time the
// method is declared:

// COMPUTED PROPERTY
{/* <div id="app">
            <div class="card">
                <header class="card-header card-header-title">
                    <span>Original:</span>
                    {{ message }}
                </header>
            </div>

            <div class="card">
                <header class="card-header card-header-title">
                    <span>Reversed:</span>
                    {{ reversedMessage }}
                </header>
            </div>
            
            <div class="card">
                <header class="card-header card-header-title">
                    <span>Reversed:</span>
                    {{ reversedMessage }}
                </header>
            </div>

            <div class="card">
                <header class="card-header card-header-title">
                    <span>Reversed:</span>
                    {{ reversedMessage }}
                </header>
            </div> */}

new Vue ({
    el: '#app',
    data: {
        message: 'Greetings!',
    },
    // computed: {
    //     reversedMessage() {
    //         console.log('Computed Function is Running!')
    //         return this.message.split('').reverse().join('');
    //     }
    methods: {
        reversedMessage() {
            console.log('Methods Function is Running!')
            return this.message.split('').reverse().join('');
        }
    }
})

