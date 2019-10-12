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
                            <v-card-title>Login</v-card-title>
                            <v-card-text>
                                <v-text-field
                                        v-model="name"
                                        label="name"
                                        required
                                ></v-text-field>
                                <v-text-field
                                        v-model="password"
                                        label="password"
                                        required
                                ></v-text-field>

                            </v-card-text>
                            <v-card-actions>
                                <v-row no-gutters>
                                    <v-col
                                            md="2"
                                            offset-md="10">
                                        <v-btn text v-on:click="validateLoggin()">
                                            <v-icon>mdi-content-save-outline </v-icon>
                                            Login</v-btn>
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
    import { EventBus } from './eventBus.js';
    export default {
        mounted(){
        },
        methods: {
            validateLoggin() {
                const baseURI = 'https://magicalshop.azurewebsites.net/api/Users'
                restApi.post(baseURI, {
                    name: this.name,
                    password: this.password
                }).then((result) => {
                    if(result.firstName == null){
                        EventBus.$emit('isLoggedIn', true);
                    }
                })
            }
        }
    }
</script>