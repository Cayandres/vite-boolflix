<script>
import { store } from '../data/store';
export default {
  name:'MainSearch',
  data(){
    return{
      store,
      selected: '',
    }
  },
  props:{
      lang : String,
      query : String,
    },

    methods: {
    handleSearch() {
      if (this.selected === 'movie') {
        this.$emit('startSearchMovie'); 
      } else if (this.selected === 'tv') {
        this.$emit('startSearchTv'); 
      } else if (this.selected === 'both') {
        this.$emit('startSearch');
      }
    },
  },
}
</script>

<template>
  <div class="container-search">
    <div class="logo">
      <img :src="`logo-boolflix.png`" :alt="lang">
    </div>
      <div class="s-container">
        <input class="searchInput" 
        type="text" 
        placeholder="Cerca un Film o una Serie tv"
        v-model="store.apiParams.query"
        @keydown.enter="$emit('startSearch')">
  
        <div class="searchButton" @click.stop="handleSearch">Cerca</div>
        <select v-model="selected">
           <option disabled value="">Please select one</option>
           <option value="tv">Serie Tv</option>
           <option value="movie">Film</option>
           <option value="both">entrambi</option>
        </select>
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
    height: 100%;
    padding: 10px;
  }
}
.logo {
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: scaleUp 0.5s ease-out alternate;
}

@keyframes scaleUp {
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
}

.s-container{
  display: flex;
}

.searchInput{
  width: 100%;
  padding: 15px;
  border-radius: 10px;
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