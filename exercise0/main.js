var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        link: 'http://www.google.com'
    },
    methods: {
        sayHello: function() { return this.message; },
        getLink: function() { return this.link; }
    }
})