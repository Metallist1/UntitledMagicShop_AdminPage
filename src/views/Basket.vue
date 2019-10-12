<template>
    <v-container>
      <v-row>
        <v-col offset-md="1" md="5">
          <div class="pa-2" id="info">
            <h1>All Items</h1>
            <v-simple-table id="tableitem" light>
              <thead>
                <tr>
                  <th class="text-left" style="width=70%;">Products</th>
                  <th class="text-left" style="width=100%">Price</th>
                  <th class="text-left" style="width=100%">Basket</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in magicItem" :key="item.name">
                  <td>
                      <span id="td_name"> {{item.name}} </span><br>
                      <span id="item_category">{{item.category}}</span><br>
                      <span id="item_description">{{item.description}}</span>
                  </td>
                  <td> {{ item.price }} </td>
                  <td>
                    <v-btn @click="addToBasket(item)"> 
                      <v-icon color = dark >add_box</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
           
          </div>      
        </v-col>
        <v-col offset-md="1" md="4">
          <div class="pa-2" id="info">
            <h1>Current basket</h1>
            <v-simple-table id="tableitems" light>
              <thead>
                <tr>
                  <th class="text-left" style="width=70%;">Quantity</th>
                  <th class="text-left" style="width=100px">Name of item</th>
                  <th class="text-left" style="width=100px">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in basket" :key="item.name">
                  <td>
                    <v-icon small color="dark" @click="increaseQnt(item)">add_box</v-icon>
                      {{ item.quantity}}
                   <v-icon small coler="dark" @click="decreaseQnt(item)">indeterminate_check_box</v-icon>
                  </td>
                  <td> {{ item.name }} </td>
                  <td>{{ item.price }} </td>
                </tr>
              </tbody>
            </v-simple-table>
            <v-divider></v-divider>
            <v-row id="basket-checkout" class="mt-12" style="margin:0">
              <v-col>
                <p>Subtotal:</p>
                <p>Delivery</p>
                <p><strong>Total amount:</strong></p>
              </v-col>

              <v-col class="text-right">
                <p>100 DKK</p>
                <p>10 DKk</p>
                <p><strong>110 DKK</strong></p>
              </v-col>
            </v-row>
            <v-row style="margin:0">
                <v-spacer></v-spacer>
              <v-btn dark>Checkout</v-btn>
            </v-row>
          </div>      
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
    data () {
      return {
        basket : [

        ],
        magicItem: [
          {
            name: 'Health potion',
            description: "this is a product",
            category: 'Potion',
            price: 232, 
          },
          {
            name: 'Mana potion',
            description: "this is a product",
            category: 'Potion',
            price: 23,
          },
          {
            name: 'Stamina potion',
            description: "this is a product",
            category: 'Potion',
            price: 23,
          },
          {
            name: 'Armor helmet',
            description: "this is a product",
            category: 'Armor',
            price: 23,
          },
          {
            name: 'Armor chainmill',
            description: "this is a product",
            category: 'Armor',
            price: 23,
          },
          {
            name: 'Armor pants',
            description: "this is a product",
            category: 'Armor',
            price: 23,
            
          },
          {
            name: 'Great sword',
            description: "this is a product",
            category: 'Weapon',
            price: 23,
            
          },
          {
            name: 'Great staff',
            description: "this is a product",
            category: 'Weapon',
            price: 23,
            
          },
          {
            name: 'Great wand',
            description: "this is a product",
            category: 'Weapon',
            price: 23,
            
          },
          {
            name: 'Penguin',
            description: "this is a product",
            category: 'Pet',
            price: 23,
            
          },
          {
            name: 'Cat',
            description: "this is a product",
            category: 'Pet',
            price: 23,
            
          },
          {
            name: 'Fish with legs',
            description: "this is a product",
            category: 'Pet',
            price: 23,
            
          },
          {
            name: 'Cerberus',
            description: "this is a product",
            category: 'Mount',
            price: 23,
            
          },
          {
            name: 'Big cat',
            description: "this is a product",
            category: 'Mount',
            price: 23,
            
          },
          {
            name: 'Sheep',
            description: "this is a product",
            category: 'Mount',
            price: 29,  
          },
        ],
      }
    },
    methods: {
    addToBasket(item) {
      this.basket.push({
        name: item.name,
        price: item.price,
        quantity: 1
      })
    },
    increaseQnt(item){
      item.quantity++
    },
    decreaseQnt(item){
      item.quantity--
    },
    } 
  }
</script>


<style scoped>

#info{
  margin-top: 250px;
  margin-bottom:200px;
  background-color:rgb(255, 83, 83);
  
}
.text-left{
  font-size:12;
  font-style: bold;
}
tr th{
  text-shadow: 1px 1px 0.5px rgb(0, 0, 0);
  font-weight:bold;
}
tr td{
  padding: 10px 10px 10px 16px;
}
#td_name{
  font-weight:bold;

}
#item-description{
  font-style: italic;
  font-weight: 300;
  color: black;
  font-size:13px;
}

.col h1{
  text-align:right;
}

.col:last-child h1{
  text-align:left;
}

#basket-checkout{
  font-size:13px;
}

#basket-checkout{
  line-height: 2px;
}
</style>


