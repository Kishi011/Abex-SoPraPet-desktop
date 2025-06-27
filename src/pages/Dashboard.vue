<template>
  <v-container class="lexend-font" max-width="1000">
    <h1 class="mb-5">Dashboard</h1>

    <h1 class="mb-5">Distribuição dos Serviços</h1>

    <v-row class="align-center">
      <v-col md="3">
        <v-card class="d-flex flex-column align-center justify-center" style="height: 150px;">
          <v-card-title class="text-h6">Agendamentos</v-card-title>
          <v-card-text>
            <h4>Mês anterior: {{ agendamentos.length }}</h4>
            <h4>Mês atual: {{ agendamentos.length }}</h4>
            <h4>Mês sucessor: {{ agendamentos.length }}</h4>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col md="3">
        <v-card class="text-center" style="height: 150px;">
          <v-card-title class="text-h6">Lucro Total</v-card-title>
          <v-card-text>
            <h4>R$ {{ lucro }}</h4>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col md="3">
        <v-card style="height: 150px;">
          <v-card-title class="text-h6 text-center">Top serviços</v-card-title>
          <v-card-text>
            <h4 v-for="i in 4" :key="i">
              {{ servicosBuscados[i]?.descricao }}
            </h4>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="3">
        <v-card style="height: 150px;">
          <v-card-title class="text-h6 text-center">Total de Clientes</v-card-title>
          <v-card-text>
            <h4 class="text-center">{{ totalClientes }}</h4>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="4">
        <v-card class="text-center">
          <v-card-title class="text-h6">Raças comuns</v-card-title>
          <v-card-text>
            <h4>Schitzu</h4>
            <h4>Golden retriever</h4>
            <h4>Pintscher</h4>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col md="4">
        <v-card class="text-center">
          <v-card-title class="text-h6">Portes atendidos</v-card-title>
          <v-card-text>
            <h4>Pequeno</h4>
            <h4>Médio</h4>
            <h4>Filhote</h4>
          </v-card-text>
        </v-card>
      </v-col>


      <v-col md="4">
        <v-card>
          <v-card-title class="text-h6 text-center">Agendamentos marcados</v-card-title>
          <v-card-text>
            <h4>Hoje: {{ agendamentos.length - 10 }}</h4>
            <h4>Amanhã: {{ agendamentos.length - 15 }}</h4>
            <h4>Ontem: {{ agendamentos.length - 7 }}</h4>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col md="6">
        <ServicesPieChart />
      </v-col>

      <v-col md="6">
        <BarChart />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BarChart from '../components/BarChart.vue'
import ServicesPieChart from '../components/ServicesPieChart.vue'
export default {
  name: 'DashboardPage',
  components: { BarChart, ServicesPieChart },

  data() {
    return {
      valor: 10,
      scrollInvoked: 0,
      agendamentos: [],
      lucro: 0,
      pagamentos: [],
      servicosBuscados: [],
      totalClientes: 0,
    }
  },

  async created() {
    await this.getAgendamentos();
    await this.getPagamentos();
    await this.getClientes();
    await this.getServicosBuscados();
  },

  methods: {
    onScroll() {
      this.scrollInvoked.value++
    },

    async getAgendamentos() {
      await this.$axios.get('/agendamento')
        .then((result) => {
          const { data } = result;

          if (data.type === 'success') {
            this.agendamentos = data.data;
          }
        }).catch((err) => {
          console.log(err);
        });
    },

    async getClientes() {
      await this.$axios.get('/usuarios')
        .then((result) => {
          const { data } = result;

          if (data.type === 'success') {
            this.totalClientes = data.data.count
          }
        }).catch((err) => {
          console.log(err);
        });
    },

    async getPagamentos() {
      await this.$axios.get('/pagamento')
        .then((result) => {
          const { data } = result;

          if (data.type === 'success') {
            this.pagamentos = data.data;
          }

          this.pagamentos.forEach(p => {
            this.lucro += parseInt(p.valor);
          });

        }).catch((err) => {
          console.log(err);
        });
    },

    async getServicosBuscados() {
      await this.$axios.get('/agendamento-servicos-mais-buscados')
        .then((result) => {
          const { data } = result;

          if (data.type === 'success') {
            this.servicosBuscados = data.data;
          }

        }).catch((err) => {
          console.log(err);
        });
    },
  },
}

</script>

<style>
.v-row {
  margin: 0px !important;
}

.lexend-font {
  font-family: "Lexend", sans-serif;
  font-optical-sizing: auto;
  font-weight: normal;
  font-style: normal;
}
</style>