<template>
  <v-container>
    <h1>💖 Hello World!</h1>
    <p>Welcome to your Electron application.</p>

    <v-card class="mt-5 p-5">
      <v-list>
        <v-list-item
          href="https://vuetifyjs.com/en/"
          append-icon="mdi-vuetify"
        >
          Documentação do Vuetify
        </v-list-item>
        <v-list-item
          href="https://www.electronjs.org/pt/"
          append-icon="mdi-electron-framework"
        >
          Documentação do Electron
        </v-list-item>
      </v-list>
    </v-card>

    
  </v-container>
</template>

<script>
  console.log('This message is being logged by "App.vue", included via vite');
  export default {
    data() {
      return {
        tituloBotao: 'Vuetify está funcionando',
      }
    },

    methods: {
      buttonClick() {
        console.log('ta funcionando o click');
      }
    },
  }
</script>