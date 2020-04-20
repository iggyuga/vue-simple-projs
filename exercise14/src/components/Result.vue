<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    // export default {
    //     computed: {
    //         counter() {
    //             return this.$store.getters.doubleCounter;
    //         }
    //     }
    // }
    import { mapGetters } from 'vuex';
    import * as types from '../store/types';
    export default {
        computed: {
            ...mapGetters({
                counter: types.DOUBLE_COUNTER,
            })
        }
    }
</script>