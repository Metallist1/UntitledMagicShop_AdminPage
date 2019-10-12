<template>
<v-container id="car">
    <v-row 
    justify="center">
        <div v-for="item in items" :key="item">
            <Slide v-bind:item="item"/>
        </div>
    </v-row>
</v-container>
</template>


<script>
import Slide from '../components/Slide';
import restApi from '../api/api'
export default {
    name:'products',
    props:['category'],
    components:{
        Slide
    },
    data(){
        return{
            products: [
            ],

            items:[
            {
              id: 1,
              category: 'Potion',
              name: 'Health Potion',
              price: '123',
              images:[
                'https://i.etsystatic.com/16507927/r/il/a67ce4/1867838681/il_794xN.1867838681_esjb.jpg',
                'https://cs2.livemaster.ru/storage/6b/57/2fabf821c2c17e84e7a3fd685ano--tableware-witch-s-cauldron-mug-with-red-potion.jpg',
                'https://s3-eu-west-1.amazonaws.com/htsi-ez-prod/ez/images/1/8/3/3/1953381-1-eng-GB/01-RED-POTION.jpg'
              ]
            },
            {
              id: 2,
              category:'Potion',
              name: 'Mana Potion',
              price: '425',
              images:[
                'https://live.staticflickr.com/4141/4906541282_4f2d5772cd_b.jpg',
                'https://cs5.livemaster.ru/storage/73/f0/398cd1d622bcec2feb4847d866bz--tableware-witch-039-s-cauldron-with-blue-potion.jpg',
                'https://ourwabisabilife.com/wp-content/uploads/2019/02/Debi-Murray-alice-potion-1.jpg'
              ]
            },
            {
              id: 3,
              category:'Potion',
              name: 'Stamina Potion',
              price: '785',
              images:[
                'https://cdn.shopify.com/s/files/1/0134/8898/0068/products/il_fullxfull.1561393171_mrng_1000x.jpg?v=1550741204',
                'https://cs5.livemaster.ru/storage/61/9b/758a33e39ac40ac6c0288fe1119b--tableware-witch-039-s-cauldron-with-green-potion.jpg',
                'https://i.etsystatic.com/11772875/r/il/47fa4a/1942384846/il_fullxfull.1942384846_8ziv.jpg'
              ]
            },
            {
              id: 4,
              category:'Mount',
              name: 'Magic horse',
              price: 'over 9000',
              images:[
                'https://cdn.pixabay.com/photo/2017/09/12/23/52/png-2744050_960_720.png',
                'https://cdn.pixabay.com/photo/2017/09/12/20/02/png-2743495_960_720.png',
                'https://vignette.wikia.nocookie.net/dragonquest/images/7/7c/DQVIII3DS_-_Erdrick%27s_sword.png/revision/latest?cb=20171218012218'
              ]
            },
            {
              id: 5,
              category:'Pet',
              name: 'Owl pet',
              price: '1235',
              images:[
                'https://cdn.pixabay.com/photo/2017/08/02/00/46/owl-2569202_1280.png',
                'https://vignette.wikia.nocookie.net/dragonquest/images/7/7c/DQVIII3DS_-_Erdrick%27s_sword.png/revision/latest?cb=20171218012218',
                'https://vignette.wikia.nocookie.net/dragonquest/images/7/7c/DQVIII3DS_-_Erdrick%27s_sword.png/revision/latest?cb=20171218012218'
              ]
               },
               {
              id: 6,
              category:'Pet',
              name: 'Birdy',
              price: '7568',
              images:[
                'https://cdn.pixabay.com/photo/2017/09/03/00/40/png-2709025_1280.png',
                'https://vignette.wikia.nocookie.net/dragonquest/images/7/7c/DQVIII3DS_-_Erdrick%27s_sword.png/revision/latest?cb=20171218012218',
                'https://vignette.wikia.nocookie.net/dragonquest/images/7/7c/DQVIII3DS_-_Erdrick%27s_sword.png/revision/latest?cb=20171218012218'
              ]
               },
              {
              id: 7,
              category:'Weapon',
              name: 'Great Sword',
              price: 'over 9000',
              images:[
                'https://supernovicedotnet.files.wordpress.com/2018/09/180920_mhw_wyvernignitionimpact.png?w=720',
                'https://vignette.wikia.nocookie.net/dragonquest/images/7/7c/DQVIII3DS_-_Erdrick%27s_sword.png/revision/latest?cb=20171218012218',
                'https://vignette.wikia.nocookie.net/dragonquest/images/7/7c/DQVIII3DS_-_Erdrick%27s_sword.png/revision/latest?cb=20171218012218'
              ]
              },
           
          ]
        }
    },

    methods: {
        fetchProducts() {
            //var cleanString = this.category.replace(/s(\s+)?$/, '');
            restApi.get('items?selectType=' + this.category)
                .then((result) => {
                    if (this.products && this.products.length > 0){
                        this.products = this.products.filter(a => result.data.some(an => an.id ===a.id));
                    } else{
                        this.products = result.data
                    }
                })
        }
    }


}
</script>


<style scoped>
#car{
    padding-top:200px;
    padding-bottom:200px; 
}

.expansionPanel{
    font-size: 10px; 
}

.text-center{
    padding-top:3px;
}

</style>