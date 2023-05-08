<script>
  import { store }         from '../data/store';
  
  export default {
    name: 'HeaderSearch',

    data(){
      return{
        store,
      }
    },
    props:{
      lang : String,
      query : String,
    }
  }
  </script>

<template>

 <div class="container-search">
      <img :src="`logo-boolflix.png`" :alt="lang">
      
      <input class="searchInput" 
      type="text" 
      placeholder="Cerca un Film o una Serie tv"
      v-model="store.apiParams.query"
      @keydown.enter="$emit('startSearch')">

      <span class="searchButton" @click.stop="$emit('startSearch')">Cerca</span>

 </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as*;

.container-search{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $primaryColor;
  height: 80px;
  img{
    height: 100%;
    padding: 10px;
  }
}

.searchInput{
  width: 30%;
  padding: 15px;
  border-radius: 10px;
  margin-left: auto;
  border: none;
  height: 50px;
}

.searchButton{
  margin: 0 10px;
  border-radius: 10px;
  padding: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: white;
}

</style>