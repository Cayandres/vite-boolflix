<script>
  export default {
    name : "FilmCard",

    props:{
      card:String,
      lang: String,
      rating: Number,
    }
  }
  </script>

<template>


    <div class="card">
      <img :src="'http://image.tmdb.org/t/p/w342' + card.poster_path" alt="error">

      <div class="film-description">

        <h3>{{ card.title || card.name }}</h3>
        <h4>{{ card.original_name || card.original_title }}</h4>
        <div class="flags-container">
          <img :src="`/flags/language-${lang}.svg`" :alt="lang">
        </div>
        <span v-for="star in rating" :key="star"><i class="fa-solid fa-star"></i></span>
        <span v-for="starEmpty in (5-rating)" :key="starEmpty"><i class="fa-regular fa-star"></i></span>

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
    .fa-solid.fa-star{
      color: gold;

    }

    img{
      width: 100%;
    }
    .flags-container{
      width: 30px;
      margin: 10px 0;
    }
   }


</style>