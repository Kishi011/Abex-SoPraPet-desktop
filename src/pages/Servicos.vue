<template>
  <v-container max-width="1000">
    <h1 class="mb-5">Meus Serviços</h1>

    <v-tabs v-model="tab" class="mb-5" height="55">

      <section class="d-flex align-center w-100">
        <v-tab value="0" color="#1253E8">Serviços</v-tab>
        <v-tab value="1" color="#1253E8">Novo</v-tab>

        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              flat
              fab
              class="ml-5 mr-5 h-100 rounded-0"
              append-icon="mdi-filter"
              style="border-bottom: 2px solid #ccc;"
            >
              Filtro
            </v-btn>
          </template>
          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-title>Tem q fazer ainda os bagulho do filtro</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>

        <v-text-field
          hide-details
          label="Pesquisar"
          append-inner-icon="mdi-magnify"
          clearable
        ></v-text-field>
      </section>

    </v-tabs>

    <v-tabs-window v-model="tab">

      <v-tabs-window-item value="0">
        <v-card class="card-servico pa-2" flat>
          <section class="pa-2 d-flex align-center">
            <span class="card-span mr-2">Banho e Tosa</span>
            <span class="tag tag-yellow">Não Publicado</span>
            <v-icon @click="edit">mdi-pencil-box-outline</v-icon>
            
            <v-spacer></v-spacer>

            <v-icon style="color: #555;">mdi-calendar-month</v-icon>
            <span style="color: #555;">07 Nov 2024</span>
          </section>
          <v-divider></v-divider>
          <section class="pa-2">
            <span class="tag tag-blue">Cachorro</span>
            <span class="tag tag-blue">Gato</span>
            <span class="tag tag-blue">Banho</span>
            <span class="tag tag-blue">Guaxinim</span>
            <span class="tag tag-blue">Tosa</span>
          </section>
        </v-card>
      </v-tabs-window-item>

      <v-tabs-window-item value="1">
        <v-text-field
          label="Nome do Serviço"
        ></v-text-field>

        <v-textarea
          label="Descrição"
          no-resize
        ></v-textarea>

        <div class="d-flex align-center">
          <v-autocomplete
            class="mr-5"
            label="Dias de Atendimento"
            prepend-inner-icon="mdi-calendar-multiple"
          ></v-autocomplete>

          <v-autocomplete
            label="Horários"
            prepend-inner-icon="mdi-calendar-multiple"
          ></v-autocomplete>
        </div>

        <v-autocomplete
          label="Serviço voltado para"
          chips
          closable-chips
          multiple
          :items="['Cachorro', 'Gato', 'Pato', 'Guaxinim', 'Furão', 'Fuinha']"
        ></v-autocomplete>

        <v-autocomplete
          label="Tipo do Serviço"
          :items="['Banho', 'Tosa', 'Vanicação', 'Consulta', 'Castração', 'Cirurgia']"
        ></v-autocomplete>

        <div class="d-flex justify-end">
          <v-btn size="large" color="#F8623F" flat @click="dialog = true">Criar</v-btn>
        </div>
      </v-tabs-window-item>

    </v-tabs-window>
  </v-container>

  <v-dialog v-model="dialog" max-width="700">
    <v-card>
      
      <v-card-title class="d-flex align-center">
        <v-btn flat fab icon @click="dialog = false">
          <v-icon color="#F8623F">mdi-arrow-left</v-icon>
        </v-btn>
        <h1 class="h1-dialog">Tem certeza que deseja continuar?</h1>
      </v-card-title>
      
      <v-card-text>
        <v-row>
          <span class="span-dialog">Você está prestes a criar o serviço: <span class="span-dialog" style="color: #f8623f; font-weight: bold;">Banho e Tosa</span></span>
        </v-row>
        <v-row>
          <span class="span-dialog">Depois de criar o serviço ele precisará ser publicado para aparecer aos clientes.</span>
        </v-row>
        <v-row>
          <span class="span-dialog" style="color: #D5B500; font-weight: bold;">Você pode publicá-lo no menu de serviços</span> 
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-btn size="large" color="#F8623F" flat @click="confirm">Confirmar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ServicosPage',

  data() {
    return {
      tab: 0,
      dialog: false,
    }
  },

  methods: {
    confirm() {
      this.dialog = false;
      this.tab = 0;
    },

    edit() {
      this.tab = 1;
    },
  },
}
</script>

<style>
  .card-span {
    font-size: 16px;
  }

  .card-servico {
    border: 1px solid #ccc !important;
    border-radius: 15px !important;
  }

  .tag {
    padding: 0px 15px;

    margin: 0 5px;
    border-radius: 15px;
  }

  .tag-blue {
    color: #1253E8;
    background-color: #C9CAFF;
    border: 1px solid #1253E8;
  }

  .tag-yellow {
    color: #A0C300;
    background-color: #FFFEC9;
    border: 1px solid #D3E812;
  }

  .h1-dialog {
    font-size: 20px;
  }

  .span-dialog {
    font-size: 16px;
    font-weight: 500;
  }
</style>