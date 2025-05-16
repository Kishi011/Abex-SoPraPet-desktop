<template>
  <v-app>
    <v-navigation-drawer rail rail-width="25%" expand-on-hover permanent class="drawer lexend-font" 
      @update:rail="rail = !rail"
    >
      <v-container>

        <div class="d-flex align-center justify-start mb-3">
          <div style="width: 75px;">
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn class="pa-0 w-100" height="75" flat v-bind="props" style="border: 1px solid #ccc; border-radius: 15px;">
                  <v-img width="75" src="/Marca-01.png"></v-img>
                </v-btn>
              </template>
              <v-card class="lexend-font">
                <v-list>
                  <v-list-item link @click="this.$router.push('inicio')">
                    <v-row align-center>
                      <v-col sm="3"><v-icon>mdi-logout</v-icon></v-col>
                      <v-col>Log out</v-col>
                    </v-row>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-menu>
          </div>
          <div v-if="!rail" class="ml-3">
            <h2 style="font-weight: bold;">SóPraPet</h2>
            <span style="font-weight: 600;">Status: Online <v-icon color="green" size="7">mdi-circle</v-icon></span>
          </div>
        </div>
        
        <v-divider></v-divider>

        <v-list>
          
          <span v-if="!rail" style="color: #555;">Gerenciamento</span>

          <v-list-item id="dashboard" class="item rounded-xl pa-5 mb-2 active" @click="changePage('dashboard')">
            <div class="d-flex align-center">
              <v-icon size="35">mdi-view-dashboard</v-icon>
              <h2 v-if="!rail" class="ml-5">Dashboard</h2>
            </div>
          </v-list-item>

          <v-divider class="mb-2"></v-divider>

          <span v-if="!rail" style="color: #555;">Serviços</span>

          <v-list-item id="servicos" class="item rounded-xl pa-5 mb-2" @click="changePage('servicos')">
            <div class="d-flex align-center">
              <v-icon size="35">mdi-dog-service</v-icon>
              <h2 v-if="!rail" class="ml-5">Meus Serviços</h2>
            </div>
          </v-list-item>

          <v-list-item id="agendamentos" class="item rounded-xl pa-5 mb-2" @click="changePage('agendamentos')">
            <div class="d-flex align-center">
              <v-icon size="35">mdi-calendar-multiple-check</v-icon>
              <h2 v-if="!rail" class="ml-5">Agendamentos</h2>
            </div>
          </v-list-item>

          <v-divider class="mb-2"></v-divider>

          <span v-if="!rail" style="color: #555;">Outros</span>

          <v-list-item id="config" class="item rounded-xl pa-5" @click="changePage('config')">
            <div class="d-flex align-center">
              <v-icon size="35">mdi-cog-outline</v-icon>
              <h2 v-if="!rail" class="ml-5">Configuraçoes</h2>
            </div>
          </v-list-item>

        </v-list>
      </v-container>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',

  data() {
    return {
      currentActive: 'dashboard',
      drawer: true,
      rail: true,
    }
  },

  methods: {
    changePage(newActive) {
      document.getElementById(this.currentActive).classList.remove('active');
      document.getElementById(newActive).classList.add('active');

      this.currentActive = newActive;

      this.$router.push(newActive);
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