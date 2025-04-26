<template>
  <v-container class="lexend-font" max-width="800">
    <h1 class="mb-5">Dashboard</h1>

  <!-- Informações dos Ganhos do Mês -->
    <h1 class="mb-5">Distribuição dos Serviços</h1>
    <section class="d-flex justify-center">
      <div class="d-flex flex-column align-center justify-center" style="margin-right: 200px;">
        <h1>Ganhos do Mês</h1>
        <h2 class="d-inline"><v-icon>mdi-cash</v-icon>R$ 25.481</h2>
      </div>
      <ServicesPieChart
        style="max-width: 70%;"
      />
    </section>

    <!-- Gráfico de Vendas e Lucros -->
    <h1 class="mb-5">Gráfico de Vendas e Lucros</h1>
    <BarChart
      style="max-width: 100%;"
    />
  </v-container>
</template>

<script>
import BarChart from '../components/BarChart.vue'
import ServicesPieChart from '../components/ServicesPieChart.vue'
export default {
  name: 'DashboardPage',
  components: { BarChart, ServicesPieChart }
}

</script>

<style>
  .lexend-font {
    font-family: "Lexend", sans-serif;
    font-optical-sizing: auto;
    font-weight: normal;
    font-style: normal;
  }
</style>