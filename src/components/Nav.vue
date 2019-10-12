<template>
      <v-container fluid no-gutters>
        <v-container fluid no-gutters>
           <v-row class="header" no-gutters fluid> 
              <v-col md="2" sm="1">   
                <div class="logo">
                    <router-link to="/"><i class="fas fa-dragon"></i></router-link>
                </div>
              </v-col>

              <v-col md="2" sm="1" offset-md="1">
                <div class="nav" text-center>
                  <v-menu offset-y>
                    <template id="all-items" v-slot:activator="{ on }">
                      <v-btn
                        color="dark"
                        dark
                        v-on="on"
                      >
                        All Items
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                        v-on-click=""
                      >
                      <v-list-item-title><router-link :to="{name: 'allproducts', params:{ category: 'allitems'} }"> All Items</router-link></v-list-item-title>
                      </v-list-item>
                      <v-list-item
                        v-on-click=""
                      >
                      <v-list-item-title><router-link :to="{name: 'productOverview', params:{ category: 'potions'} }"> Potions</router-link></v-list-item-title>
                      </v-list-item>
                        <v-list-item
                        v-on-click=""
                      >
                       <v-list-item-title><router-link :to="{name: 'productOverview', params:{ category: 'armor'} }"> Armor</router-link></v-list-item-title>
                      </v-list-item>
                       <v-list-item
                        v-on-click=""
                      >
                       <v-list-item-title><router-link :to="{name: 'productOverview', params:{ category: 'weapon'} }"> Weapons</router-link></v-list-item-title>
                      </v-list-item>
                       <v-list-item
                        v-on-click=""
                      >
                       <v-list-item-title><router-link :to="{name: 'productOverview', params:{ category: 'pets'} }"> Pets</router-link></v-list-item-title>
                      </v-list-item>
                       <v-list-item
                        v-on-click=""
                      >
                       <v-list-item-title><router-link :to="{name: 'productOverview', params:{ category: 'mounts'} }"> Mounts</router-link></v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
              </v-col>

              <v-col md="2" sm="1">
                <div class="nav">
                  <v-btn
                        color="dark"
                        dark
                        v-on="on"
                      >
                        <router-link tag="nav" to="/CustomerService">Contact us</router-link>
                      </v-btn>
                  
                </div>
              </v-col>

              <v-col md="2" sm="1">   
                <div class="nav"> 
                  <v-btn
                        color="dark"
                        dark
                        v-on="on"
                      >
                        <router-link tag="nav" to="/About">About us</router-link>
                      </v-btn>
                </div>
              </v-col>
                    
              <v-col md="2" sm="1">
                <div class="shoppingcart">
                  <router-link tag="nav" class-active="active" to="/basket"><i class="fas fa-shopping-cart"></i></router-link>
                </div>
              </v-col>
               <v-col md="2" sm="1">
                   <div class="nav">
                       <v-btn
                               color="dark"
                               dark
                               v-on="on"
                       >
                           <router-link tag="nav" to="/AdminMain">Admin</router-link>
                       </v-btn>
                   </div>
               </v-col>
            </v-row>
          </v-container>
        </v-container>
</template>