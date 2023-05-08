<script>
import FilmCard    from './partials/FilmCard.vue';
import { store }      from '../data/store';

  export default {
    name:'Main',
    data(){
      return{
        store
      }
    },
    props:{
      title:String,
      type: String,
    },

    components:{
      FilmCard,
    }
  }
  </script>
<template>
  
  <div class="background">
    <h2>{{ title }}</h2>
    <div class="container">
      <FilmCard 
      v-for=" card in store[type]" 
      :key="card.id"
      :card="card"
      :lang="card.original_language"
      />
    </div>  
  </div>
    
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars.scss' as*;
.background{
  background-color: white;
  text-align: center;
  .container{
    text-align: left;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

}

</style>