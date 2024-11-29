<template>
  <v-card
    flat
    class="lexend-font position-fixed bottom-0"
    style="right: 50px; border-radius: 15px 15px 0 0; border: 1px solid #ccc;"
    width="350"
  >
    <v-card-title
      class="d-flex align-center justify-space-between pl-5 pr-5 pt-2 pb-2 card-msg-title"
      style="border-bottom: 1px solid #ccc;"
      @click="expand = !expand"
    >
      <h1 class="d-inline">Mensagens</h1>
      <v-spacer></v-spacer>
      <v-icon>{{ expand ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
    </v-card-title>
    
    <v-list v-if="expand" class="pl-0 pr-0 card-msg-conteudo" max-height="400" style="overflow-y: scroll;">
      
      <v-list-item class="d-flex align-center" style="height: 50px;">
        <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
        <h2 class="d-inline">Vinicius</h2>
      </v-list-item>

      <v-list-item class="d-flex align-center" style="height: 50px;">
        <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
        <h2 class="d-inline">João</h2>
      </v-list-item>

      <v-list-item class="d-flex align-center" style="height: 50px;">
        <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
        <h2 class="d-inline">Eduardo</h2>
      </v-list-item>

      <v-list-item class="d-flex align-center" style="height: 50px;">
        <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
        <h2 class="d-inline">Paulo</h2>
      </v-list-item>

      <v-list-item class="d-flex align-center" style="height: 50px;">
        <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
        <h2 class="d-inline">Vinicius</h2>
      </v-list-item>

      <v-list-item class="d-flex align-center" style="height: 50px;">
        <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
        <h2 class="d-inline">João</h2>
      </v-list-item>

      <v-list-item class="d-flex align-center" style="height: 50px;">
        <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
        <h2 class="d-inline">Eduardo</h2>
      </v-list-item>

      <v-list-item class="d-flex align-center" style="height: 50px;">
        <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
        <h2 class="d-inline">Paulo</h2>
      </v-list-item>

      <v-list-item class="d-flex align-center" style="height: 50px;">
        <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
        <h2 class="d-inline">Vinicius</h2>
      </v-list-item>

      <v-list-item class="d-flex align-center" style="height: 50px;">
        <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
        <h2 class="d-inline">João</h2>
      </v-list-item>

      <v-list-item class="d-flex align-center" style="height: 50px;">
        <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
        <h2 class="d-inline">Eduardo</h2>
      </v-list-item>

      <v-list-item class="d-flex align-center" style="height: 50px;">
        <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
        <h2 class="d-inline">Paulo</h2>
      </v-list-item>

    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'CardMensagensComponent',

  data() {
    return {
      expand: false,
    }
  },
}
</script>

<style>
  .lexend-font {
    font-family: "Lexend", sans-serif;
    font-optical-sizing: auto;
    font-weight: normal;
    font-style: normal;
  }
</style>