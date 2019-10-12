<template>
    <v-col class="allitems">
        <h1>All items in categories</h1>
        <div class="pa-2" id="info">
            <template>
               <v-data-table
                :headers="headers"
                :items="productoverview"
                item-key="name"
                group-by="category"
                class="elevation-1"
                show-group-by
                ></v-data-table>
            </template>
            <v-divider></v-divider>
        </div>
    </v-col>
</template> 


<script>
export default {
    data () {
      return {
        headers: [
          {
            text: 'All Items Magical Shop)',
            align: 'left',
            value: 'name',
          },
          { text: 'Category', value: 'category' },
        ],
        productoverview: [
          {
            name: 'Health potion',
            category: 'Potions',
          },
          {
            name: 'Mana potion',
            category: 'Potions',
          },
          {
            name: 'Stamina potion',
            category: 'Potions',
          },
          {
            name: 'Hat',
            category: 'Armor',
          },
          {
            name: 'Shirt',
            category: 'Armor',
          },
          {
            name: 'Pants',
            category: 'Armor',
          },
          {
            name: 'Great sword',
            category: 'Weapon',
          },
          {
            name: 'Great staff',
            category: 'Weapon',
          },
          {
            name: 'Great wand',
            category: 'Weapon',
          },
          {
            name: 'Penguin',
            category: 'Pets',
          },
          {
            name: 'Cat',
            category: 'Pets',
          },
          {
            name: 'Fish with legs',
            category: 'Pets',
          },
          {
            name: 'Cerberus',
            category: 'Mount',
          },
          {
            name: 'Big cat',
            category: 'Mount',
          },
          {
            name: 'Sheep',
            category: 'Mount',
          },
        ],
      }
    },
  }
</script>


<style>
.allitems{
  padding-top:100px;
  margin-bottom:500px;
  margin-left:250px;
  width:1000px;
}
</style>
