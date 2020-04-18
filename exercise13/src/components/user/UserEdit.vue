<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
        <hr>
        <button class="btn btn-primary" @click="confirmed = !confirmed">Confirm</button>
        <div style="background-color:blue;height: 700px"></div>
        <p id="data">Some extra data</p>
    </div>    
</template>

<script>
    export default {
        data() {
            return {
                confirmed: false,
            }
        },
        beforeRouteLeave(to, from, next) {
            console.log('here1')
            if (this.confirmed) { // important to note, we have access to the data here, because the component is already loaded
                next();
            } else {
                if (confirm('Are you sure?')) {
                    next();
                } else {
                    next(false);
                }
            }
        }
    }
</script>