<template>
  <v-container class="lexend-font config-style" max-width="1000">
    <h1 class="mb-5">Configurações</h1>

    <v-tabs v-model="tab">

      <v-tab value="0" color="#1253E8">Geral</v-tab>
      <v-tab value="1" color="#1253E8">Meu Perfil</v-tab>

    </v-tabs>

    <v-tabs-window v-model="tab" class="pa-5">

      <v-tabs-window-item value="0">
        <h2>Gerenciar configurações do aplicativo</h2>

        <v-switch label="Tema Escuro"></v-switch>
      </v-tabs-window-item>

      <v-tabs-window-item value="1">
        <h2 class="mb-5">Alterar informações sobre o petshop</h2>

        <div class="d-flex flex-column">
          <v-img
            src="/Marca-01.png"
            width="150"
            class="align-center rounded mb-5"
            style="background-color: #eee;"
            @click=""
          ><v-icon size="30" class="pa-5 rounded-circle" style="background-color: #fff;">mdi-camera-outline</v-icon></v-img>

          <div style="max-width: 500px;">
            <v-text-field
              v-model="perfil.nome"
              label="Nome do Petshop"
            ></v-text-field>

            <v-text-field
              v-model="perfil.email"
              label="Email"
            ></v-text-field>

            <div class="w-100 d-flex flex-row justify-space-between">
              <v-text-field
                label="CEP"
                max-width="225"
              ></v-text-field>
              <v-text-field
                v-model="perfil.telefone"
                label="Telefone"
                max-width="225"
              ></v-text-field>
            </div>

            <v-text-field
              label="Nº Residência"
              max-width="225"
            ></v-text-field>

            <v-btn
              flat
              color="#F8623F"
              width="225"
              @click="dialog = true"
            >Salvar Alterações</v-btn>
          </div>
        </div>
      </v-tabs-window-item>
    </v-tabs-window>

    <v-dialog v-model="dialog" max-width="700">
      <v-card class="lexend-font">
        
        <v-card-title class="d-flex align-center">
          <v-btn flat fab icon @click="dialog = false">
            <v-icon color="#F8623F">mdi-arrow-left</v-icon>
          </v-btn>
          <h1 class="h1-dialog">Tem certeza que deseja continuar?</h1>
        </v-card-title>
        
        <v-card-text class="pl-16">
          <v-row>
            <v-col>
              <h2>Tem certeza que deseja salvar as alterações?</h2>
            </v-col>
          </v-row>
        </v-card-text>
  
        <v-card-actions>
          <v-btn size="large" color="#F8623F" flat @click="confirm">Confirmar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'ConfigPage',

  data() {
    return {
      perfil: {},
      tab: 0,
      dialog: false,
    }
  },

  async created() {
    await this.getPerfil();
  },

  methods: {
    async getPerfil() {
      await this.$axios.get(`/petshop/${12123123000112}`)
        .then((result) => {
          const { data } = result;
          
          if(data.type === 'success') {
            this.perfil = data.data;
            console.log(this.perfil);
          }
        }).catch((err) => {
          console.log(err);
        });
    },

    async confirm() {
      await this.alterPerfil();
      this.dialog = false;
    },

    async alterPerfil() {
      const req = {
        nome: this.perfil.nome,
        email: this.perfil.email,
        telefone: this.perfil.telefone,
      }

      await this.$axios.post(`/petshop/persist/${12123123000112}`, req)
        .then((result) => {
          const { data } = result;

          console.log(data.message);
        }).catch((err) => {
          console.log(err);
        });
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

  .config-style .v-img:hover {
    cursor: pointer;
    background-color: #ddd !important;
  }

  .config-style  .v-img .v-responsive__content {
    display: flex;
    justify-content: center;
  }
</style>