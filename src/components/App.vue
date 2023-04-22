<template>
  <div class="App">
    <Links
        :links="links"
        @activateTab="activateTab"/>
    <Article
        :title="activeArticle.title"
        :text="activeArticle.text"
        :src="activeArticle.src"/>
  </div>
</template>
<script>
import Links from './Links';
import Article from './Article'
import {defineComponent} from "vue";
import {articles} from "@/data/data";
import {links} from "@/data/data";
 export default defineComponent({
   name: "App",
   components: { Links, Article },
   data() {
     return {
       articles: articles,
       links: links,
       activeArticle: articles[0]
     };
   },
   methods: {
     activateTab(link) {
       const article = this.articles.find(article => article.id === link.id);
       this.activeArticle = article;
       this.links.forEach(item => item.active = false);
       link.active = true;
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
   padding: 32px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   position: relative;
   gap: 16px;
 }
</style>