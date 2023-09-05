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
      <img
      v-if="card.poster_path"
      :src="'http://image.tmdb.org/t/p/w342' + card.poster_path"
      alt="error"
    >
    <img
      v-else
      src="../../assets/placeholder_image1.png" 
      alt="Placeholder Image"
    >

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
  width: calc(100%/5);
  border: 1px solid black;
  height: 400px;
  background-color: black;
  position: relative;
  padding: 1px;
    img{
      height: 100%;
      object-fit: cover;
    }
  }
   .film-description{
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
    opacity: 0;
    &:hover {
      transition: opacity 0.3s ease-in-out;
      opacity: 1;
      overflow: scroll;
      background-color: rgba(0, 0, 0, 0.697);
      color: white;
    }
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