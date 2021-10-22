<template>
  <div class="d-flex justify-center ma-5 flex-wrap">
    <v-alert color="blue-grey white--text" style="width:70%"
      >Rent selected movies: {{ selected.map((el) => el.title).join(', ') }}</v-alert
    >
    <v-data-table
      style="width:90%"
      show-select
      v-model="selected"
      :items-per-page="5"
      :footer-props="{ itemsPerPageOptions: [6, 12, 18] }"
      :items="movies"
      :headers="headers"
      class="elevation-3"
    ></v-data-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      selected: [],
      movies: [],
      headers: [
        { text: 'Title', value: 'title', class: 'blue-grey lighten-5' },
        { text: 'Director', value: 'director', class: 'blue-grey lighten-5' },
        { text: 'Genre', value: 'genre', class: 'blue-grey lighten-5' },
        { text: 'Year', value: 'year', class: 'blue-grey lighten-5' },
        { text: 'Rated', value: 'rated', class: 'blue-grey lighten-5' },
        { text: 'Plot', value: 'plot' },
      ],
    };
  },
  methods: {
    async getMovies() {
      const result = await axios({
        method: 'GET',
        url: 'http://localhost:3000/movies',
      });
      this.movies = result.data;
    },
  },
  created() {
    this.getMovies();
  },
};
</script>
