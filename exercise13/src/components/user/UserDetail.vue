<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <router-link 
            tag="button" 
            :to='link'
            class="btn btn-primary">Edit User
        </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                link: { 
                    name: "userEdit", 
                    params: { id: this.$route.params.id }, 
                    query: { locale: "en", q: 100 } ,
                    hash: '#data'
                }
            }
        },
        beforeRouteEnter(to, from, next) {
            console.log('component lvl beforeRouteEnter');
            // this.link will not work here, the component has not been created as this point. Lifecycle method
            // if (true) { // if authenticated
            // } else {
            //     next(false);
            // }
            return next();
            // next(vm => { if you want to access data from this component pass as a callbackfn
            //     vm.link;
            // });

        }
    }
</script>