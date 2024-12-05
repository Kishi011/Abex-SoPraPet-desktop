<template>
  <v-main style="margin-left: 100px;">
    <v-container class="lexend-font agendamento-style" max-width="800">
      <h1 class="mb-5">Agendamentos</h1>
  
      <section>
  
        <div v-for="a in agendamentos" :key="a" class="d-flex align-center pa-2 mb-5">
          <v-img
            class="rounded"
            src="/Marca-01.png"
            style="border: 1px solid #ccc"
            width="100"
          ></v-img>
  
          <div class="d-flex flex-column w-100 pl-5 pr-5">
            <div class="d-flex align-center mb-2">
              <h2>Agendamento: <span>Manicure</span></h2>
  
              <v-spacer></v-spacer>
  
              <span>17/11</span>
            </div>
  
            <span>Você tem um novo agendamento marcado para dia 17/11.</span>
  
            <div class="d-flex justify-end">
              <v-btn
                flat
                x-large
                max-width="300"
              >Marcar no Google Agenda</v-btn>
            </div>
          </div>
        </div>
  
      </section>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'AgendamentosPage',

  data() {
    return {
      agendamentos: [],
    }
  },

  async created() {
    await this.getAgendamentos();
  },

  methods: {
    async getAgendamentos() {
      await this.$axios.get('/agendamento')
        .then((result) => {
          const { data } = result;

          if(data.type === 'success') {
            this.agendamentos = data.data;
            console.log(this.agendamentos);
          }
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

  .agendamento-style h2 {
    font-size: 16px;
    font-weight: bold;
  }

  .agendamento-style span {
    font-size: 14px;
    font-weight: 600;
  }

  .agendamento-style h2 span {
    font-size: 16px;
    font-weight: bold;
    color: #F8623F;
  }

  .agendamento-style .v-btn span {
    color: #1253E8;
  }
</style>