<template>
    <v-card-text>
        <v-list>
            <v-list-item>
                <v-list-item-title>ID</v-list-item-title>
                <v-list-item-title>Name</v-list-item-title>
                <v-list-item-title>Price</v-list-item-title>
                <v-list-item-title>On Stock</v-list-item-title>
                <v-list-item-title>Type</v-list-item-title>
                <v-list-item-title>Description</v-list-item-title>
            </v-list-item>
            <v-list-item-group
                    v-for="item in items"
            v-bind:key="item.id">
                <v-list-item>
                    <v-list-item-title>
                        <v-list-item-title>{{item.id}}</v-list-item-title>
                    </v-list-item-title>
                    <v-list-item-title >
                        <clickToEdit :id="'name'+item.id" :ref="'name'+item.id" v-model="item.name" ></clickToEdit></v-list-item-title>
                    <v-list-item-title><clickToEdit :id="'price'+item.id" :ref="'price'+item.id" v-model="item.price"></clickToEdit></v-list-item-title>
                    <v-list-item-title><clickToEdit :id="'onStock'+item.id" :ref="'onStock'+item.id" v-model="item.onStock"></clickToEdit></v-list-item-title>
                    <v-list-item-title><clickToEdit :id="'type'+item.id" :ref="'type'+item.id" v-model="item.type"></clickToEdit></v-list-item-title>
                    <v-list-item-title><clickToEdit :id="'description'+item.id" :ref="'description'+item.id" v-model="item.description"></clickToEdit></v-list-item-title>

                    <v-list-item-action>
                        <v-col>
                            <v-btn v-on:click="updateItem(item)" icon>
                                <v-icon color="grey lighten-1">mdi-circle-edit-outline</v-icon>
                            </v-btn>
                        </v-col>
                        <v-col>
                            <v-btn v-on:click="deleteItem(item.id)" icon>
                                <v-icon color="grey lighten-1">mdi-minus-circle-outline</v-icon>
                            </v-btn>
                        </v-col>

                    </v-list-item-action>
                </v-list-item>
                <v-divider inset></v-divider>
            </v-list-item-group>
        </v-list>
    </v-card-text>
</template>

<script>
    import clickToEdit from './clickToEdit'
    import restApi from '../../api/api'
    const baseURI = 'https://magicalshop.azurewebsites.net/api/Items'

    export default {
        mounted(){
        this.fetchPost()
        },
        data: ()  => ({
                items: [],
        }),
        components:{
            clickToEdit
        },
        methods: {
        fetchPost()
        {
            restApi.get(baseURI).then((result) => {
                this.items =result.data;
            })
        },
            async deleteItem(item) {
                let result = await restApi.delete(baseURI+"/" +item)
                this.deletedSuccess = true;
                if(result.status !== 200) {
                    // this.albums.push(album)
                } else {
                    this.fetchPost()
                }
            },
            async updateItem(item) {
                let result = await restApi.put(baseURI+"/" +item.id, {
                    ID:item.id,
                    Name: document.getElementById('name'+item.id).getElementsByTagName("input")[0].value,
                    Price: document.getElementById('price'+item.id).getElementsByTagName("input")[0].value,
                    OnStock: document.getElementById('onStock'+item.id).getElementsByTagName("input")[0].value,
                    Type: document.getElementById('type'+item.id).getElementsByTagName("input")[0].value,
                    Description: document.getElementById('description'+item.id).getElementsByTagName("input")[0].value,
                })
                    .then((result) => {})
                this.deletedSuccess = true;
                if(result.status !== 200) {
                    // this.albums.push(album)
                } else {
                    this.fetchPost()
                }
            }
        }
    };
</script>