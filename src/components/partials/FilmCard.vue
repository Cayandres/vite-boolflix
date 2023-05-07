<script>
  export default {
    data(){
      return{
        name : "FilmCard"
      }
    },
    props:{
      imageLink : String,
      filmTitle : String,
      originalFilmTitle : String,
      lang : String,
      rate : Number
    }
  }
  </script>

<template>


    <div class="card">
      <img :src="imageLink" alt="error">

      <div class="film-description">

        <h3>{{ filmTitle }}</h3>
        <h4>{{ originalFilmTitle }}</h4>
        <div class="flags-container">
          <img :src="`/flags/${lang}.png`" :alt="lang">
        </div>
        <p>{{ rate }}</p>

      </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars.scss' as*;

.card{
  width: 200px;
  border: 1px solid black;
  height: 500px;
  margin: 10px;
  background-color: white;

    img{
      width: 100%;
      object-fit: cover;
    }
  }
   .film-description{
    padding: 10px;
    background-color: white;
    overflow: scroll;

    img{
      width: 100%;
    }
    .flags-container{
      width: 30px;
      margin: 10px 0;
    }
   }


</style>