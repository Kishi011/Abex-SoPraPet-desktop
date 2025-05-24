<template>
  <v-card>
    <v-card-title>Gráfico de Vendas e Lucros</v-card-title>
    <v-card-text :style="`height: ${height};`">
      <Bar id="Vendas" :options="chartOptions" :data="chartData" />
    </v-card-text>
  </v-card>
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },

  props: {
    height: {
      type: String,
      default: '300px'
    }
  },

  data() {
    return {
      chartData: {
        labels: [
          'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
          'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ],
        datasets: [
          {
            label: 'Vendas',
            backgroundColor: '#1253e8',
            data: [36, 22, 12, 15, 24, 19, 30, 11, 3, 18, 26, 14]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>
