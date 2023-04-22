<template>
  <div class="article">
    <swiper
        :slides-per-view="1"
    >
      <swiper-slide v-for="source in src" :key="source">
        <img alt="chel" :src="source" class="article__img"/>
      </swiper-slide>
    </swiper>
    <h1 class="article__title">{{title}}</h1>
    <div class="article__text" v-html="text">
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

 export default {
   name: "Article",
   components: {Swiper, SwiperSlide},
   props: {
     title: String,
     text: {
       type: String,
       default: '',
     },
     src: Array,
   }

 }
</script>
<style lang="scss">
.article {
  display: flex;
  flex-direction: column;
  width: 50%;

  .swiper {
    height: 600px;
    width: 100%;
  }
  &__img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    border-radius: 16px;
  }
  &__title {
    font-size: 64px;
    line-height: 64px;
    margin: 32px 0;
  }
  &__text {
    font-size: 20px;
    line-height: 24px;
    -webkit-text-stroke: 1.5px black;
    margin-left: 3em;
    text-indent: -3em;
  }
}
</style>