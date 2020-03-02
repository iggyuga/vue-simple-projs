<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-myon:click="clicked" class="btn btn-primary">click</button>
                <div style="width:100px;height:100px; background-color:yellow"
                    v-myon:mouseenter="mouseEnter"></div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            //
            'myon': {
                bind(el, binding, vnode) {
                    var type = binding.arg; // $event type click, mouseenter
                    var fn = binding.value; // function to fire on
                    el.addEventListener(type, fn);
                }
            }
        },
        methods: {
            clicked() {
                console.log('I was clicked');
            },
            mouseEnter() {
                console.log('Mouse entered area')
            }
        }
    }
</script>

<style>
</style>
