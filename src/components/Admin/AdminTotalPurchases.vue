<template>
    <v-card-text>
        <v-list>
            <v-list-item-group
                               v-for="Pur in Purchase"
                               :key="Pur.id">
                <v-list-item>
                    <v-list-item-title>
                        <v-list-item-title>{{Pur.id}}</v-list-item-title>
                    </v-list-item-title>
                    <v-list-item-content>{{Pur.user}}</v-list-item-content>
                    <v-list-item-content>{{Pur.items}}</v-list-item-content>
                    <v-list-item-content>{{Pur.totalPrice}}</v-list-item-content>
                </v-list-item>
                <v-divider inset></v-divider>
            </v-list-item-group>
        </v-list>
    </v-card-text>
</template>

<script>
    import restApi from '../../api/api'
    const baseURI = 'https://magicalshop.azurewebsites.net/api/Purchase'
    export default {
        mounted(){
            this.fetchPost()
        },
        data: ()  => ({
            Purchase: []
        }),
        methods: {
            fetchPost()
            {
                restApi.get(baseURI).then((result) => {
                    this.Purchase =result.data;
                })
            },
        }
    };
</script>