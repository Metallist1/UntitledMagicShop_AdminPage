<template>
  <v-app>
    
    <v-content>



<router-view/>


    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
    data: () => ({
    //disabled: false,
    //openDelay: '0',
    //closeDelay: '0',
    //value: false,

    }),


  methods: {
    myFunction() {
      var container = document.getElementById("header");
      var sticky = container.offsetTop;

      if (window.pageYOffset > sticky) {
        container.classList.add("sticky");
      } else {
        container.classList.remove("sticky");
      }
    }
  },
  created() {
    window.addEventListener ('scroll', this.myFunction);
  },

  destroyed() {
    window.addEventListener ('scroll', this.myFunction);
  },
  mounted(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}

</script>

<style>
#app {
  background: url("https://images.template.net/wp-content/uploads/2016/10/25063338/Magical-Paintings.jpg") no-repeat center center fixed; 
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
  margin:0;
  padding:0;
}

body{
  font-family: 'Be Vietnam', sans-serif;
}

/*logovv*/  
i.fas.fa-dragon {
  font-size: 2.5em;
  color:white;
  transition: 0.3s;
  padding-left:20px;
}

i.fas.fa-user{
  font-size: 1.5em;
  color:white;
  transition: 0.3s;
}

i.fas.fa-shopping-cart {
  font-size: 2.5em;
  color:white;
  transition: 0.3s;
  margin-left:60px;
}

i{
  transition: 0.7s ease;
  padding-top:10px;
}
/*logo^^*/


/*header*/
.nav i .nav, .shoppingcart{
  color:white;
  transition: 0.3s;
  cursor: pointer;
}

.nav{
  transition: 0.3s;
  cursor: pointer;
  padding-top:10px;
  margin-left:60px;
}

.nav nav, #all-items{
  color:white;
  text-decoration:none;
  transition: 0.3s;
}

.header{
  background-color:rgba(0, 0, 0, 0.808);  
  z-index:9000;
  position: fixed;
  width:100%;
  box-shadow: 1px 1px 1px black;
  padding: 12px 15px;
}

/* The sticky class is added to the header with JS when it reaches its scroll position */
.sticky {
  position: fixed;
  top: 0;
  width: 100%
}

/* Add some top padding to the page content to prevent sudden quick movement (as the header gets a new position at the top of the page (position:fixed and top:0) */
.sticky + .content {
  padding-top: 102px;
}

/* Page content */
.content {
  padding: 16px;
}
/*header^^^^^^*/


/*Shoppingcart*/

.container {
  padding:0;
}

.cards{
  background-color:rgba(255, 255, 255, 0.377);
  padding-top:50px;
  padding-bottom:50px;
  box-shadow: 3px -1px 5px rgb(145, 145, 145);
}


/*main stuff*/ 


.home h1 {
	font-size: 48px;
}

.home p {
	font-size: 24px;
	color: rgb(0, 0, 0);
	line-height: 44px;
  padding-top:5px;
}

.home {
  padding:0px;
  padding-top: 200px;
	padding-bottom: 200px;
	background: url("file:///C:/Users/St1nn/Pictures/Magical-Paintings%20(2).jpg") no-repeat center center fixed; 
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
  margin-bottom: 10px;
}

a{
  text-decoration: none;
}

/*footer*/
.socialbox a {
  width: 40px;
  margin-left: 5px;
  box-sizing:border-box;
  color:white;
  font-size: 1.5em;
}

i.fab.fa-facebook-square{
  font-size: 2.5em;
  color:white;
  transition: 0.3s ease;
}
i.fab.fa-instagram{
  font-size: 2.5em;
  color:white;
  transition: 0.3s ease;
}
i.fab.fa-twitter-square{
  font-size: 2.5em;
  color:white;
  transition: 0.3s ease;
}

i:hover{
  opacity: 0.3;
}

#footer{
  justify-content: center;
  color:rgb(0, 0, 0);
  font-size:20px;
  background-image: url("https://cdn.pixabay.com/photo/2017/09/14/11/07/water-2748640_1280.png");
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  padding-top:50px;
}

#footer h1{
  justify-content: center;
  color:rgb(0, 0, 0);
  text-shadow: 3px 3px 3px black;
}

#bottext{
  color:black;
  display:flex;
  margin-top:15px;
}

#bottext p{
  display:flex;
  flex:2;
  margin-left:30px;
  margin-right:30px;
  font-size:12px;
}


@media screen and (max-width: 960px) {
  .mx-auto{
   width:400px;
  }
  #footer{
  font-size: 15px;
  }
  i.fas.fa-shopping-cart, i.fas.fa-dragon{
    font-size:1.5em;
  }
  

  
}

@media screen and (max-width: 1264px) {
  .mx-auto{
   width:400px;
  }
  
}

</style>


