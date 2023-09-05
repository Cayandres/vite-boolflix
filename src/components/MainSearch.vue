<script>
import { store } from '../data/store';
export default {
  name:'MainSearch',
  data(){
    return{
      store
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
      <div class="s-container">
        <input class="searchInput" 
        type="text" 
        placeholder="Cerca un Film o una Serie tv"
        v-model="store.apiParams.query"
        @keydown.enter="$emit('startSearch')">
  
        <div class="searchButton" @click.stop="$emit('startSearch')">Cerca</div>     
      </div>
      

 </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as*;
.container-search{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $primaryColor;
  height: 100vh;
  flex-direction: column;
  img{
    height: 20%;
    padding: 10px;
  }
}

.s-container{
  display: flex;
}

.searchInput{
  width: 100%;
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
  cursor: pointer;
  background-color: white;
  font-size: 19px;
  &:hover{
   background-color: red;
   color: white;
  }
}

</style>