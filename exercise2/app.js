new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        alert: function () {
            alert("bahha");
        },
        input1: function($event) {
            this.value = $event.target.value;
        }
    }
});