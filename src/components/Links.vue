<template>
  <div class="links-wrapper">
  <div class="links">
    <div
    v-for="(link, index) in links"
    :key="index"
    :class="{link, active: link.active }"
    @click="activateTab(link)"
    >{{link.text}}</div>
  </div>
    <Shift/>
  </div>
</template>
<script>
import Shift from './Shift';
 export default {
   name: 'Links',
   components: { Shift },
   data() {
     return {
       links: [
         { text: 'maison kitsune x and wander ss23', active: true },
         { text: 'nowhere', active: false },
         { text: 'новый op-ed от жени рабкина', active: false },
         { text: 'ruffo research', active: false },
         { text: 'salomon & and wander xt4', active: false },
         { text: 'Jun Takahashi & Nigo', active: false },
       ],
     };
   },
   methods: {
     activateTab(link) {
       this.links.forEach(item => item.active = false);
       link.active = true;
     }
   },
 }
</script>
<style lang="scss">
.links {
  padding: 32px 24px;
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  .link {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.08em;
    text-transform: lowercase;
    transition: all .4s ease-out;
    color: #DADADA;
    cursor: pointer;
    -webkit-text-stroke: 2.5px #d9d9d9;
    &:hover {
      -webkit-text-stroke: 2.5px black;
      color: black;
    }
  }
  .link.active {
    padding-left: 113px;
    -webkit-text-stroke: 2.5px black;
    color: black;
  }
  .links-wrapper {
    position: relative;
  }
}
</style>