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
        <v-list-item
          href="https://vuejs.org/guide/introduction.html"
          append-icon="mdi-vuejs"
        >
          Documentação do Vue 3
        </v-list-item>
        <v-list-item
          href="https://router.vuejs.org"
          append-icon="mdi-vuejs"
        >
          Documentação do Vue Router
        </v-list-item>
        <v-list-item
          href="https://axios-http.com/ptbr/docs/intro"
        >
          Documentação do Axios
        </v-list-item>
      </v-list>
    </v-card>

    <main>
      <h1>Teste</h1>
      <RouterLink class="mr-2" to="/">Home</RouterLink>
      <RouterLink class="mr-2" to="/about">About</RouterLink>
      <v-btn @click="trocaTela">Esse botão troca de View</v-btn>
      <RouterView />
    </main>

  </v-container>
</template>

<script>
  console.log('This message is being logged by "App.vue", included via vite');

  export default {
    methods: {
      trocaTela() {
        this.$router.push('/button');
      },
    },
  }
</script>