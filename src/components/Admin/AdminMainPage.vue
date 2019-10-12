<template>
    <div id="app">
        <v-container fluid>
            <v-container fluid>
                <v-row id="header" dense fluid>
                    <v-col cols="12" md="2" sm="4">
                        <div class="nav">
                            <btn text v-on:click="toggle(1)">
                                <v-icon>mdi-content-save-outline </v-icon>
                                Create Item</btn>
                        </div>
                    </v-col>
                    <v-col cols="12" md="2" sm="4">
                        <div class="nav">
                            <btn text v-on:click="toggle(2)">
                                <v-icon>mdi-content-save-outline </v-icon>
                                Update/Delete Item</btn>
                        </div>
                    </v-col>
                    <v-col cols="12" md="2" sm="4">
                        <div class="nav">
                        <btn text v-on:click="toggle(3)">
                            <v-icon>mdi-content-save-outline </v-icon>
                            View all purchases</btn>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-container>
        <component v-bind:is="component" />
    </div>
</template>

<script>
    import { EventBus } from '../../components/Admin/eventBus.js';

    import AdminLogin from "../../components/Admin/AdminLogin";
    import AdminCreateItem from "../../components/Admin/AdminCreateItem";
    import AdminDeleteItem from "../../components/Admin/AdminDeleteItem";
    import AdminTotalPurchases from "../../components/Admin/AdminTotalPurchases";
    export default {
        name: 'app',
        components: {
            AdminCreateItem,
            AdminDeleteItem,
            AdminTotalPurchases,
            AdminLogin

        },
        mounted(){
            EventBus.$on('isLoggedIn', (payload) => {
                this.isConfirmed = true,
                this.components = AdminDeleteItem
            });
        },
        data: ()  => ({
                component:AdminLogin,
                    isConfirmed:true
        }),
        methods: {
            toggle(whichComponent){
                if (whichComponent == 0) {
                    this.component = AdminLogin;
                }else if (whichComponent == 1 && this.isConfirmed) {
                    this.component = AdminCreateItem;
                } else if(whichComponent == 2 && this.isConfirmed) {
                    this.component = AdminDeleteItem;
                }else if(whichComponent == 3 && this.isConfirmed) {
                    this.component = AdminTotalPurchases;
                }
            }
        }
    }
</script>

<style scoped>
    #header {
        background-color: #000000;
        text-align:center;
        z-index:9000;
    }

    #header .nav {
        color:white;
    }

    #logo:hover{
        opacity: 0.3;
    }

    #logo{
        transition: 0.7s ease;
    }

    /*logovv*/
    i.fa.fa-github-square{
        font-size: 2.5em;
        color:white;
    }
</style>