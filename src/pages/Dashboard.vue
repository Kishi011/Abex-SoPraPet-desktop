<template>
  <v-app>
    <v-container max-width="1000">
      <h1 class="mb-5">Dashboard</h1>
      <!-- Informações de Lucros do Mês -->
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>Lucros do Mês</v-card-title>
            <v-card-text>
              <div>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-icon>mdi-cash</v-icon>
                      <span> R$ </span>
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
          <v-card>
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
          <v-card>
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
          <v-card>
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