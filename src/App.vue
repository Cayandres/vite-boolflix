<script>
import HeaderSearch      from './components/HeaderSearch.vue'
import Main              from './components/Main.vue'
import Footer            from './components/Footer.vue'
import axios             from 'axios'
import { store }         from './data/store'



  export default {
    components:{
      HeaderSearch,
      Main,
      Footer,
      store,
    },
    data(){
      return{
        name : "appVue"
      }
    },
    methods:{
      getApi(){
        axios.get(store.apiUrl,{
          params:{
            api_key : store.api_key,
            language : store.language,
            query : store.titleToSearch
          }
        })
        .then(result => {
          store.resultApiCall = result.data.results
        })
      }
    },
    mounted(){
      this.getApi()
    }
  }
  </script>


<template>
  
<div class="appWrapper">
  
  <HeaderSearch @startSearch="getApi" />
  
  <Main />
  
  <Footer />
  
</div>

</template>

<style lang="scss">
@use "./scss/main.scss" as *;

</style>