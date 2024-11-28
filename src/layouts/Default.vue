<template>
  <v-app class="lexend-font">
    <v-navigation-drawer rail rail-width="25%" expand-on-hover permanent class="drawer" 
      @update:rail="rail = !rail"
    >
      <v-container>

        <div class="d-flex align-center justify-start mb-3">
          <div style="width: 75px;">
            <v-img src="/Marca-01.png" style="border: 1px solid #ccc; border-radius: 15px;"></v-img>
          </div>
          <div v-if="!rail" class="ml-3">
            <h2 style="font-weight: bold;">SóPraPet</h2>
            <span style="font-weight: 600;">Status: Online <v-icon color="green" size="7">mdi-circle</v-icon></span>
          </div>
        </div>
        
        <v-divider></v-divider>

        <v-list>
          
          <span v-if="!rail" style="color: #555;">Gerenciamento</span>

          <v-list-item id="item-dashboard" class="item rounded-xl pa-5 mb-2 active" @click="changePage('dashboard')">
            <div class="d-flex align-center">
              <v-icon size="35">mdi-view-dashboard</v-icon>
              <h2 v-if="!rail" class="ml-5">Dashboard</h2>
            </div>
          </v-list-item>

          <v-divider class="mb-2"></v-divider>

          <span v-if="!rail" style="color: #555;">Serviços</span>

          <v-list-item id="item-meus-servicos" class="item rounded-xl pa-5 mb-2" @click="changePage('meus-servicos')">
            <div class="d-flex align-center">
              <v-icon size="35">mdi-dog-service</v-icon>
              <h2 v-if="!rail" class="ml-5">Meus Serviços</h2>
            </div>
          </v-list-item>

          <v-list-item id="item-agendamentos" class="item rounded-xl pa-5 mb-2" @click="changePage('agendamentos')">
            <div class="d-flex align-center">
              <v-icon size="35">mdi-calendar-multiple-check</v-icon>
              <h2 v-if="!rail" class="ml-5">Agendamentos</h2>
            </div>
          </v-list-item>

          <v-divider class="mb-2"></v-divider>

          <span v-if="!rail" style="color: #555;">Outros</span>

          <v-list-item id="item-configuracoes" class="item rounded-xl pa-5" @click="changePage('configuracoes')">
            <div class="d-flex align-center">
              <v-icon size="35">mdi-cog-outline</v-icon>
              <h2 v-if="!rail" class="ml-5">Configuraçoes</h2>
            </div>
          </v-list-item>

        </v-list>
      </v-container>
    </v-navigation-drawer>

    <v-main style="margin-left: 115px;">
      <component :is="page"/>
    </v-main>

    <v-card
      flat
      class="position-fixed bottom-0"
      style="right: 50px; border-radius: 15px 15px 0 0; border: 1px solid #ccc;"
      width="350"
    >
      <v-card-title
        class="d-flex align-center justify-space-between pl-5 pr-5 pt-2 pb-2 card-msg-title"
        style="border-bottom: 1px solid #ccc;"
        @click="expandMensagens = !expandMensagens"
      >
        <h1 class="d-inline">Mensagens</h1>
        <v-spacer></v-spacer>
        <v-icon>{{ expandMensagens ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
      </v-card-title>
      
      <v-container v-if="expandMensagens" class="pl-0 pr-0 card-msg-conteudo" max-height="400" style="overflow-y: scroll;">
        
        <div class="d-flex align-center" style="height: 50px;">
          <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
          <h2 class="d-inline">Vinicius</h2>
        </div>

        <div class="d-flex align-center" style="height: 50px;">
          <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
          <h2 class="d-inline">João</h2>
        </div>

        <div class="d-flex align-center" style="height: 50px;">
          <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
          <h2 class="d-inline">Eduardo</h2>
        </div>

        <div class="d-flex align-center" style="height: 50px;">
          <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
          <h2 class="d-inline">Paulo</h2>
        </div>

        <div class="d-flex align-center" style="height: 50px;">
          <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
          <h2 class="d-inline">Vinicius</h2>
        </div>

        <div class="d-flex align-center" style="height: 50px;">
          <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
          <h2 class="d-inline">João</h2>
        </div>

        <div class="d-flex align-center" style="height: 50px;">
          <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
          <h2 class="d-inline">Eduardo</h2>
        </div>

        <div class="d-flex align-center" style="height: 50px;">
          <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
          <h2 class="d-inline">Paulo</h2>
        </div>

        <div class="d-flex align-center" style="height: 50px;">
          <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
          <h2 class="d-inline">Vinicius</h2>
        </div>

        <div class="d-flex align-center" style="height: 50px;">
          <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
          <h2 class="d-inline">João</h2>
        </div>

        <div class="d-flex align-center" style="height: 50px;">
          <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
          <h2 class="d-inline">Eduardo</h2>
        </div>

        <div class="d-flex align-center" style="height: 50px;">
          <v-avatar class="mr-5"><v-icon>mdi-account</v-icon></v-avatar>
          <h2 class="d-inline">Paulo</h2>
        </div>

      </v-container>
    </v-card>
  </v-app>
</template>

<script>
import Agendamentos from '../pages/Agendamentos.vue';
import Configuracoes from '../pages/Configuracoes.vue';
import Dashboard from '../pages/Dashboard.vue';
import Servicos from '../pages/Servicos.vue';

export default {
  name: 'DefaultLayout',
  components: { Dashboard, Servicos, Agendamentos, Configuracoes },

  data() {
    return {
      currentActive: 'dashboard',
      drawer: true,
      rail: true,
      expandMensagens: false,
      page: 'Dashboard',
    }
  },

  methods: {
    changePage(newActive) {
      document.getElementById('item-' + this.currentActive).classList.remove('active');
      document.getElementById('item-' + newActive).classList.add('active');

      this.currentActive = newActive;

      switch (newActive) {
        case 'dashboard':
          this.page = 'Dashboard';
          break;

        case 'meus-servicos':
          this.page = 'Servicos';
          break;

        case 'agendamentos':
          this.page = 'Agendamentos';
          break;

        case 'configuracoes':
          this.page = 'Configuracoes';
          break;
      
        default:
          break;
      }
    },
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
  
  h2 {
    font-size: 16px;
    font-weight: normal;
  }

  span {
    font-size: 12px;
  }

  .item {
    border-radius: 15px;
  }

  .item:hover {
    cursor: pointer;
    transition: all .2s;
    background-color: #f8613f41;
  }

  .active {
    background-color: #f8623f88 !important;
  }

  .drawer {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, .25) !important;
  }

  .card-msg-title:hover {
    cursor: pointer;
    background-color: #eee;
  }
</style>