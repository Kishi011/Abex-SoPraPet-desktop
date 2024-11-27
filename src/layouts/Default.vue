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
  </v-app>
</template>

<script>
import Agendamentos from '../pages/Agendamentos.vue';
import Dashboard from '../pages/Dashboard.vue';
import Servicos from '../pages/Servicos.vue';

export default {
  name: 'DefaultLayout',
  components: { Dashboard, Servicos, Agendamentos },

  data() {
    return {
      currentActive: 'dashboard',
      drawer: true,
      rail: true,
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
</style>