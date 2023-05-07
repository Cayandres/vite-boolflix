<script>
import FilmCard    from './partials/FilmCard.vue';
import { store }      from '../data/store';

  export default {
    data(){
      return{
        store
      }
    },
    components:{
      FilmCard,
    }
  }
  </script>
<template>
  
  <div class="background">
    <div class="container">
      <FilmCard 
      v-for="(film,id) in store.resultApiCall" 
      :key="id"
      :imageLink="'http://image.tmdb.org/t/p/w342' + film.poster_path"
      :filmTitle="film.title"
      :originalFilmTitle="film.original_title"
      :lang="film.original_language"
      :rate="film.vote_average"
      />
    </div>  
  </div>
    
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars.scss' as*;
.background{
  background-color: $primaryColor;
  .container{
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

}

</style>