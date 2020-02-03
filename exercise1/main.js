var app = new Vue({
    el: '#exercise',
    data: {
        name: 'Ignacio Rosas',
        age: 31,
        imageLink: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.businessinsider.com%2Fmost-reliable-car-brands-2019-jd-power-2019-6&psig=AOvVaw12KXTYe-YSihYWRRRJg_P5&ust=1580403621263000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjbybekqecCFQAAAAAdAAAAABAJ'
    },
    methods: {
        sayHello: function() { return this.message; },
        getLink: function() { return this.link; }
    }
})