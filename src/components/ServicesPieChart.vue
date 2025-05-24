<template>
   <v-card>
    <v-card-title>Serviços realizados por categoria</v-card-title>
    <v-card-text :style="`height: ${height};`">
      <Pie id="Vendas" :options="chartOptions" :data="chartData" />
    </v-card-text>
  </v-card>
</template>

<script>
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

export default {
  name: 'ServicesPieChart',
  components: { Pie },

  props: {
    height: {
      type: String,
      default: '300px', 
    },
  },

  data() {
    return {
      chartData: {
        labels: ['Banho', 'Tosa', 'Vacinação', 'Consulta', 'Castração', 'Cirurgia'],
        datasets: [
          {
            label: 'Serviços Prestados',
            data: [5, 4, 2, 3, 0, 0],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: '#fff',
            borderWidth: 1
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
          plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    }
  }
}
</script>