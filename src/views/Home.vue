<template>
  <v-content>
    <Nav>

    </Nav>
    <section id="home">
      <div class="home">
        <div class="text-center">
          <h1 class="display-4">Magical Shop</h1>
          <p class="display-1">Buy magic items! Amazing right?</p>
        </div>
      </div>
    </section>

    <v-row class="cards">
      <v-col v-for="card in cards" :key="card.name">
        <Card
          v-bind:name="card.name"
          v-bind:src="card.src"
          v-bind:categoryName="card.categoryName"
          v-bind:width="card.width"
        />
      </v-col>
    </v-row>
    <Footer>

    </Footer>
  </v-content>
</template>

<script>
import Card from "../components/Card";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
export default {
  components: {
    Card,
    Nav,
    Footer
  },
  data() {
    return {
      mycategory: "potion",
      cards: [
        {
          name: "Potions",
          categoryName: "potion",
          width: "400",
          src: "https://i.redd.it/4ihc42fm4bi11.jpg"
        },
        {
          name: "Armor",
          categoryName: "armor",
          width: "400",
          src:
            "https://cdna.artstation.com/p/assets/images/images/001/016/814/large/dmitry-solonin-armor.jpg?1438251611"
        },
        {
          name: "Weapons",
          categoryName: "weapon",
          width: "400",
          src: "https://i.redd.it/a0856rhzntz21.png"
        },
        {
          name: "Pets",
          categoryName: "pet",
          width: "600",
          src:
            "https://cdna.artstation.com/p/assets/images/images/016/879/352/large/jose-carpio-g-o-a-t-baal.jpg?1553806308"
        },
        {
          name: "Mounts",
          categoryName: "mount",
          width: "600",
          src:
            "https://bnetcmsus-a.akamaihd.net/cms/blog_header/qu/QU1CZ1D3AF511561561533278.jpg"
        }
      ]
    };
  }
};
</script>
