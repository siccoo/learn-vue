let renderComponent = {
    render(createElement) {
        return createElement(
            'div',{
                'attr': {
                    class: 'render-card'
                }, 
            }, [
                createElement('header')
            ]
        );
    },
    props: ['message']
};