
new Vue({
    el: '#app',
    data: {
        message: 'Eliora!!!'
    }
})

let renderComponent = {
    render(h) {
        return h(
            'div',{
                'attr': {
                    class: 'render-card'
                }, 
            }, [
                h('header', {
                    'attr': {
                        class: 'card-header card-header-title',
                    }
                }, this.message)
            ]
        );
    },
    props: ['message']
};

// let renderComponent = {
//     render(h) {
//         return(
//             <div class="render-card">
//                 <header class="card-header card-header-title">
//                     {this.message}
//                 </header>
//             </div>
//         )
//     }
// }