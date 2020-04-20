<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 500})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 500})">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from "vuex";
    import * as types from '../store/types';

    export default {
        methods: { 
            ...mapActions({
                asyncIncrement: types.ACTION_INCREMENT_ASYNC_COUNTER,
                asyncDecrement: types.ACTION_DECREMENT_ASYNC_COUNTER
            })
            // ,
            // increment(by) {
            //     this.$store.dispatch('increment', by);
            // }
        }
    }
</script>