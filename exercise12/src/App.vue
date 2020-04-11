<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input class="form-control" type='text' v-model="user.username" />
                </div>                
                <div class="form-group">
                    <label>Email</label>
                    <input class="form-control" type='text' v-model="node" />
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <input class="form-control" type='text' v-model="user.email" />

                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <ul class="list-group">
                    <li v-bind:key="index" class="list-group-item" v-for="(u, index) in users">{{ u.username }} - {{ u.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: '',
                    node: 'data'
                },
                users: [],
                resource: {},
            }
        },
        methods: {
            submit() {
                // this.$http.post('data.json', this.user)
                //     .then(response =>  {
                //         console.log(response);
                //     }, error => {
                //         console.log(error);
                //     });
                //this.$resource('data.json').save({}, this.user)
                this.$resource('{node}.json').saveAlt(this.user)
                //this.
            },
            fetchData() {
                // this.$http.get('data.json')
                //     .then(response => {
                //         return response.json();
                //     })
                //     .then(data => {
                //         const resultArray = [];
                //         for (let key in data) {
                //             resultArray.push(data[key]);
                //         }
                //         this.users = resultArray;
                //     });
                this.$resource('{node}.json').getData({node: this.node})
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        const resultArray = [];
                        for (let key in data) {
                            resultArray.push(data[key]);
                        }
                        this.users = resultArray;
                    });
            },
            created() {
                const customActions = {
                    saveAlt: {method: 'POST', url: 'alternative.json'},
                    getData: {method: 'GET'}
                }
                this.resource = this.$resource('{node}.json', {}, customActions);
            }
        }
    }
</script>

<style>
</style>
