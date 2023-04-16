<template>
  <div class="App">
    <Links/>
    <Article/>
  </div>
</template>
<script>
import Links from './Links';
import Article from './Article'
import {defineComponent} from "vue";
 export default defineComponent({
   name: "App",
   components: { Links, Article },
   data() {
     return {

     }
   }
 })
</script>

<style lang="scss">
@import '../scss/fonts.scss';
 * {
   padding: 0;
   margin: 0;
 }
 a {
   text-decoration: none;
   color: #000000;
 }
 body {
   background: #F0F0F0;
   font-family: "Suisse Intl", sans-serif;
   -webkit-text-stroke: 2.5px black;
 }
 .App {
   display: flex;
   flex-direction: row;
   position: relative;
   gap: 16px;
 }
</style>