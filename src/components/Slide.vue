<template>
    <v-col
        class = "vcol-width-constrait"
        align="center">
        <v-carousel
         hide-delimiter-background
         show-arrows-on-hover>
            <v-carousel-item
            class="mx-auto"
            v-for="(img, i) in item.images"
            :key="i"
            :src="img"
            width="376px"
            />
            </v-carousel>
            <v-row align="center">
                <v-expansion-panels
                :accordion="accordion"
                :popout="popout"
                :inset="inset"
                :multiple="multiple"
                :focusable="focusable"
                :disabled="disabled"
                >
                    <v-expansion-panel>
                        <v-expansion-panel-header class="expansionPanel"> 
                            <v-col  
                            align="center">
                                <h5>Category: {{item.category}} | {{item.name}}  |  Price: {{item.price}}</h5>
                            </v-col>
                        </v-expansion-panel-header>

                        <v-expansion-panel-content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-row>
        </v-col>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style scoped>
.vcol-width-constrait {
    max-width: 376px;
}
</style>