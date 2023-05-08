<script>
import HeaderSearch      from './components/HeaderSearch.vue'
import Main              from './components/Main.vue'
import Footer            from './components/Footer.vue'
import axios             from 'axios'
import { store }         from './data/store'



  export default {
    name : "App",
    components:{
      HeaderSearch,
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
  
  <HeaderSearch 
  @startSearch="getApi('movie'), getApi('tv')" 
   />
  
  <Main v-if="store.movie.length > 0" title="Film" type="movie"/>
  <Main v-if="store.tv.length > 0" title="Serie TV" type="tv"/>
  
  <Footer />
  
</div>

</template>

<style lang="scss">
@use "./scss/main.scss" as *;

</style>