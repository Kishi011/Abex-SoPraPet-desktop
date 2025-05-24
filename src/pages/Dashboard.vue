<template>
  <v-container class="lexend-font" max-width="1000">
    <h1 class="mb-5">Dashboard</h1>

    <h1 class="mb-5">Distribuição dos Serviços</h1>

    <v-row class="bg-red align-center">
      <v-col md="8">
        <v-row>
          <v-col md="4" class="bg-green">
            <v-card class="text-center">
              <v-card-title class="text-h6">Total de agendamentos</v-card-title>
              <v-card-text>
                <h4>Mês anterior: 243</h4>
                <h4>Mês atual: 243</h4>
                <h4>Mês sucessor: 243</h4>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col md="4">
            <v-card class="text-center">
              <v-card-title class="text-h6">Valores totais</v-card-title>
              <v-card-text>
                <h4>Recebimenos</h4>
                <h4>Despesas</h4>
                <h4>Lucros</h4>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col md="4" class="bg-blue">
            <v-card>
              <v-card-title class="text-h6 text-center">Top melhores serviços</v-card-title>
              <v-card-text>
                <h4>Banho</h4>
                <h4>Tosa</h4>
                <h4>Vacina preventiva</h4>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col md="4">
        <v-card>
          <v-card-title class="text-h6 text-center">Clientes</v-card-title>
          <v-card-text>
            <h4>Ativos: 786</h4>
            <h4>Premium: 321</h4>
            <h4>Inativos: 23</h4>
          </v-card-text>
        </v-card>
      </v-col>

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

      <v-col md="5">
        <v-card class="text-center">
          <v-card-title class="text-h6">Portes atendidos</v-card-title>
          <v-card-text>
            <h4>Pequeno</h4>
            <h4>Médio</h4>
            <h4>Filhote</h4>
          </v-card-text>
        </v-card>
      </v-col>


      <v-col md="12">
        <v-card>
          <v-card-title class="text-h6 text-center">Agendamentos marcados</v-card-title>
          <v-card-text>
            <h4>Hoje: </h4>
            <h4>Amanhã: </h4>
            <h4>Ontem: </h4>
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
    }
  },

  methods: {
    onScroll() {
      this.scrollInvoked.value++
    }
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