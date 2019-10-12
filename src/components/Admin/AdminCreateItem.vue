<template>
    <v-form v-model="valid">
        <v-container>
            <v-row no-gutters>
                <v-col
                        md="4"
                        offset-md="4">
                    <v-card  class="pa-2"
                             color="primary"
                             outlined
                             tile>
                        <v-card-title>New Item</v-card-title>
                        <v-card-text>
                            <v-text-field
                                    v-model="Name"
                                    label="Name"
                                    required
                            ></v-text-field>
                            <v-text-field
                                    v-model="Price"
                                    label="Price"
                                    required
                            ></v-text-field>
                            <v-text-field
                                    v-model="OnStock"
                                    label="OnStock"
                                    required
                            ></v-text-field>
                            <v-text-field
                                    v-model="Type"
                                    label="Type"
                                    required
                            ></v-text-field>
                            <v-text-field
                                    v-model="Description"
                                    label="Description"
                                    required
                            ></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-row no-gutters>
                                <v-col
                                        md="2"
                                        offset-md="10">
                                    <v-btn text v-on:click="save()">
                                        <v-icon>mdi-content-save-outline </v-icon>
                                        Save</v-btn>
                                </v-col>
                            </v-row>

                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
    import restApi from '../../api/api'
    const baseURI = 'https://magicalshop.azurewebsites.net/api/Items'
    export default {
        mounted(){
            this.fetchPost()
        },
        data: ()  => ({
            items: []
        }),
        methods: {
            save() {
                restApi.post(baseURI, {
                    Name: this.Name,
                    Price: this.Price,
                    OnStock: this.OnStock,
                    Type: this.Type,
                    Description: this.Description,

                })
                    .then((result) => {
                        console.log(result)
                    })
            }
        }
    };
</script>