<template>
  <v-container class="agendamento-style" max-width="1000">
    <h1 class="mb-5">Agendamentos</h1>

    <section>

      <div class="d-flex align-center pa-2 mb-5">
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

      <div class="d-flex align-center pa-2 mb-5 ">
        <v-img
          class="rounded"
          src="/Marca-01.png"
          style="border: 1px solid #ccc"
          width="100"
        ></v-img>

        <div class="d-flex flex-column w-100 pl-5 pr-5">
          <div class="d-flex align-center mb-2">
            <h2>Agendamento: <span>Vacinação</span></h2>

            <v-spacer></v-spacer>

            <span>15/11</span>
          </div>

          <span>Você tem um novo agendamento marcado para dia 15/11.</span>

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
</template>

<style>
  .agendamento-style h1 {
    font-size: 24px;
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