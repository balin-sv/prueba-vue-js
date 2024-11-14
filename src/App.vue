<script setup></script>

<template>
  <v-container fluid class="bg-black fill-height pa-0">
    <v-row no-gutters class="fill-height">
      <v-col
        cols="12"
        class="d-flex justify-center align-center"
        style="height: 10vh"
      >
        <v-col cols="12"> </v-col>
      </v-col>
      <v-col
        cols="9"
        class="d-flex justify-center align-center"
        style="height: 50vh"
      >
        <v-sheet class="w-100 h-100 bg-grey-lighten-2"> </v-sheet>
      </v-col>
      <v-col
        cols="3"
        class="d-flex justify-center align-center"
        style="height: 50vh"
      >
        <v-sheet class="w-100 h-100 bg-grey-lighten-3"> </v-sheet>
      </v-col>
      <v-col
        cols="12"
        class="d-flex justify-center align-center"
        style="height: 40vh"
      >
        <v-sheet class="w-100 h-100 bg-grey-lighten-4"> </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.fill-height {
  min-height: 100vh;
}
</style>
