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
        <div class="mb-2">
          <v-btn @click="navigatesTo('/button')">Esse botão troca de View</v-btn>
        </div>
        <div class="mb-2">
          <v-btn @click="goBack">Esse botão volta para a tela anterior</v-btn>
        </div>
        <div class="mb-2">
          <v-btn @click="goForth">Esse botão avança para a tela que você estava</v-btn>
        </div>
        <RouterView />
        <div class="mb-2">
          <v-btn @click="requisicao">Teste de requisição</v-btn>
        </div>
        <h2>{{ response }}</h2>
      </main>
  </v-container>
</template>

<script>
  console.log('This message is being logged by "App.vue", included via vite');

  export default {
    data() {
      return {
        response: {},
      }
    },

    methods: {
      navigatesTo(page) {
        this.$router.push(page);
      },

      goBack() {
        this.$router.go(-1);
      },

      goForth() {
        this.$router.go(1);
      },

      requisicao() {
        this.$axios.get('/pokemon/pikachu')
          .then((res) => {
            this.response = res
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  }
</script>