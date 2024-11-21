<template>
  <v-app class="lexend-font">
    <v-navigation-drawer rail rail-width="150" width="25%" expand-on-hover permanent class="drawer" 
      @update:rail="rail = !rail"
    >
      <v-container>

        <div class="d-flex align-center justify-center pa-2 mb-3">
          <v-img src="../../public/Marca-01.png" style="border: 1px solid #ccc; border-radius: 15px;" max-width="75"></v-img>
          <div v-if="!rail" class="ml-3">
            <h2 style="font-weight: bold;">SóPraPet</h2>
            <span style="font-weight: 600;">Status: Online <v-icon color="green" size="7">mdi-circle</v-icon></span>
          </div>
        </div>
        
        <v-divider class="mb-2"></v-divider>

        <v-list>

          <span v-if="!rail" style="color: #555;">Gerenciamento</span>

          <v-list-item id="item-dashboard" class="item rounded-xl pa-5 mb-2 active" @click="changePage('dashboard')">
            <div class="d-flex align-center">
              <v-icon size="30">mdi-view-dashboard</v-icon>
              <h2 v-if="!rail" class="ml-5">Dashboard</h2>
            </div>
          </v-list-item>

          <v-divider class="mb-2"></v-divider>

          <span v-if="!rail" style="color: #555;">Serviços</span>

          <v-list-item id="item-meus-servicos" class="item rounded-xl pa-5 mb-2" @click="changePage('meus-servicos')">
            <div class="d-flex align-center">
              <v-icon size="30">mdi-dog-service</v-icon>
              <h2 v-if="!rail" class="ml-5">Meus Serviços</h2>
            </div>
          </v-list-item>

          <v-list-item id="item-agendamentos" class="item rounded-xl pa-5 mb-2" @click="changePage('agendamentos')">
            <div class="d-flex align-center">
              <v-icon size="30">mdi-calendar-multiple-check</v-icon>
              <h2 v-if="!rail" class="ml-5">Agendamentos</h2>
            </div>
          </v-list-item>

          <v-divider class="mb-2"></v-divider>

          <span v-if="!rail" style="color: #555;">Outros</span>

          <v-list-item id="item-configuracoes" class="item rounded-xl pa-5" @click="changePage('configuracoes')">
            <div class="d-flex align-center">
              <v-icon size="30">mdi-cog-outline</v-icon>
              <h2 v-if="!rail" class="ml-5">Configuraçoes</h2>
            </div>
          </v-list-item>

        </v-list>
      </v-container>
    </v-navigation-drawer>

    <v-main>
      <component is="Servicos"/>
    </v-main>
  </v-app>
</template>

<script>
import Servicos from '../pages/Servicos.vue';

export default {
  name: 'DefaultLayout',

  components: { Servicos },

  data() {
    return {
      currentActive: 'dashboard',
      drawer: true,
      rail: true,
    }
  },

  methods: {
    changePage(newActive) {
      document.getElementById('item-' + this.currentActive).classList.remove('active');
      document.getElementById('item-' + newActive).classList.add('active');

      this.currentActive = newActive
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