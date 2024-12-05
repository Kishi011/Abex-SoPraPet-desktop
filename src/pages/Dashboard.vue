<template>
  <v-main style="margin-left: 100px;">
    <v-container class="lexend-font" max-width="800">
      <h1 class="mb-5">Dashboard</h1>
      <!-- Informações de Lucros do Mês -->
      <v-row>
        <v-col cols="12">
          <v-card class="rounded-lg">
            <v-card-title>Ganhos do Mês</v-card-title>
            <v-card-text>
              <div>
                <v-row>
                  <v-col class="d-flex align-center">
                    <v-icon size="30" class="mr-2">mdi-cash</v-icon>
                    <h2 class="d-inline">R$ 25.481</h2>
                  </v-col>
                </v-row>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  
      
  
      <!-- Serviços Prestados -->
      <v-row>
        <v-col cols="12">
          <v-card class="rounded-lg">
            <v-card-title>Serviços Prestados</v-card-title>
            <v-card-text>
              <v-card class="mr-2 pa-2 d-inline">Banho: 5</v-card>
              <v-card class="mr-2 pa-2 d-inline">Tosa: 4</v-card>
              <v-card class="mr-2 pa-2 d-inline">Vacinação: 2</v-card>
              <v-card class="mr-2 pa-2 d-inline">Consulta: 3</v-card>
              <v-card class="mr-2 pa-2 d-inline">Castração: 0</v-card>
              <v-card class="mr-2 pa-2 d-inline">Cirurgia: 0</v-card>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  
      <!-- Gráfico de Vendas e Lucros -->
      <v-row>
        <v-col cols="12">
          <v-card class="rounded-lg">
            <v-card-title>Gráfico de Vendas e Lucros</v-card-title>
              <v-card-text>
                <BarChart />
              </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import BarChart from '../components/BarChart.vue'
export default {
  name: 'DashboardPage',
  components: { BarChart }
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