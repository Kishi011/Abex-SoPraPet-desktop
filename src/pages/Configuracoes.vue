<template>
  <v-main style="margin-left: 100px;">
    <v-container class="lexend-font config-style" max-width="800">
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
              @click="dialog = true"
            ><v-icon size="30" class="pa-5 rounded-circle" style="background-color: #fff;">mdi-camera-outline</v-icon></v-img>
  
            <div style="max-width: 500px;">
              <v-text-field
                label="Nome do Petshop"
              ></v-text-field>
  
              <v-text-field
                label="Email"
              ></v-text-field>
  
              <div class="w-100 d-flex flex-row justify-space-between">
                <v-text-field
                  label="CEP"
                  max-width="225"
                ></v-text-field>
                <v-text-field
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
              >Salvar Alterações</v-btn>
            </div>
          </div>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'ConfigPage',

  data() {
    return {
      tab: 0,
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

  .config-style .v-img:hover {
    cursor: pointer;
    background-color: #ddd !important;
  }

  .config-style  .v-img .v-responsive__content {
    display: flex;
    justify-content: center;
  }
</style>