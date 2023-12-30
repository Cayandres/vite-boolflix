<script>
import HeaderSearch      from './components/HeaderSearch.vue'
import Main              from './components/Main.vue'
import MainSearch from './components/MainSearch.vue'
import Footer            from './components/Footer.vue'
import axios             from 'axios'
import { store }         from './data/store'



  export default {
    name : "App",
    components:{
      HeaderSearch,
      MainSearch,
      Main,
      Footer,
    },
    data(){
      return{
        store,
      }
    },
    methods:{
      getApi(type){
        let apiUrl = store.apiUrl + type;
        axios.get(apiUrl, { params: store.apiParams })
        .then(result => {
          store[type] = result.data.results;
        })
      }
    },
    mounted(){
      this.getApi('movie')
      this.getApi('tv')
    }
  }
  </script>


<template>
  
<div class="appWrapper">
  
  <MainSearch  v-if="(!(store.tv.length || store.movie.length))"  
  @startSearchTv="getApi('tv')"
  @startSearchMovie="getApi('movie')" 
  @startSearch="getApi('movie'), getApi('tv')"/>
  
  <HeaderSearch v-if="store.movie.length > 0 || store.tv.length > 0"
  @startSearch="getApi('movie'), getApi('tv')" 
   />
  <Main v-if="store.movie.length > 0" title="Film" type="movie"/>
  <Main v-if="store.tv.length > 0" title="Serie TV" type="tv"/>

</div>

</template>

<style lang="scss">
@use "./scss/main.scss" as *;

</style>