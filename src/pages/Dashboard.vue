<template>
  <v-app>
    <v-container max-width="1000">
      <h1 class="mb-5">Dashboard</h1>
      <!-- Informações de Lucros do Mês -->
      <v-row>
        <v-col cols="12">
          <v-card class="rounded-lg">
            <v-card-title>Lucros do Mês</v-card-title>
            <v-card-text>
              <div>
                <v-row>
                  <v-col class="d-flex align-center">
                    <v-icon size="30" class="mr-2">mdi-cash</v-icon>
                    <h2 class="d-inline">R$ 50.00</h2>
                  </v-col>
                </v-row>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Vendas Feitas -->
      <v-row>
        <v-col cols="12">
          <v-card class="rounded-lg">
            <v-card-title>Vendas Feitas</v-card-title>
            <v-card-text>
              Vendas Aqui
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
              Serviços Aqui
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
              Grafico Aqui
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>