<template>
  <v-app>
    <v-app-bar app color="grey" dark>
      <img style="with:30%" class="d-none d-md-inline mt-16" src="/camera_logo.png" />
      <p class="text-h3">Movies</p>
      <v-spacer></v-spacer>
      <p class="text-uppercase text-h5 font-weight-bold mx-4 pt-4">latest releases</p>
      <a style="text-decoration: none;" href="https://www.imdb.com/movies-in-theaters/"
        ><v-icon>mdi-open-in-new</v-icon>
      </a>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
