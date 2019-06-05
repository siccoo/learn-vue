
var app = new Vue({
    el: '#app',
    data: {
        name: '',
        subject: '',
        termsAndConditions: 'false',
        yesOrNo: ''
    },
    methods: {
        submit(){
            console.log('name', this.name);
            console.log('subject', this.subject);
            console.log('termsAndConditions', this.termsAndConditions);
            console.log('yesOrNo', this.yesOrNo);
        }
    }
})