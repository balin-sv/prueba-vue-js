<script setup></script>

<template>
  <v-text-field label="Search" prepend-inner-icon="fa-search">
    <template v-slot:append>
      <v-icon color="red">mdi-plus</v-icon>
    </template>
    <template v-slot:prepend>
      <v-icon color="green">mdi-minus</v-icon>
    </template>
  </v-text-field>
</template>
