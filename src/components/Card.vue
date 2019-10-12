<template>
    <v-hover
        v-slot:default="{ hover }"
        :open-delay="openDelay"
        :close-delay="closeDelay"
        :disabled="disabled"
        :value="value"
        >  
        <v-card
        class="mx-auto"
        v-bind:max-width="width"
        :elevation="hover ? 12 : 2"
        > 
            <v-img
                height="400px"
                v-bind:src="src"
                @click="gotocat(categoryName)"
                >
            <v-card-title class="align-end fill-height black--text"><strong>{{name}}</strong></v-card-title>
            </v-img>
        </v-card> 
    </v-hover>
</template>

<script>
export default {
    props:['name', 'src', 'categoryName', 'width'],
    methods:{
        gotocat(category){
          this.$router.push({name: 'productOverview', params:{cat:category}});
        }
    }
}
</script>

