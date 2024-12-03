<template>
  <v-main>
    <v-container class="lexend-font h-screen d-flex align-center" style="max-width: 500px;">
      <div class="w-100">
        <div class="d-flex justify-center">
          <v-img
            src="Marca-01.png"
            max-width="200"
          ></v-img>
        </div>
    
        <v-row>
          <v-col v-if="isLogin">
    
            <h1 class="text-center">Login Petshop</h1>
            <h2 class="text-center mb-10">Informe o seu CNPJ para entrar no sistema</h2>
      
            <v-text-field
              v-model="petshop.cnpj"
              label="CNPJ"
              single-line
              :rules="[rules.cnpj]"
            ></v-text-field>
    
            <v-text-field
              v-model="petshop.senha"
              label="Senha"
              single-line
              :type="show ? 'text' : 'password'"
              :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:appendInner="show = !show"
            ></v-text-field>
    
            <v-btn
              flat
              color="#F8623F"
              class="w-100 mb-5"
              @click="login"
            >Entrar</v-btn>
    
            <p class="text-center">
              Não tem uma conta? <span v-on:click="this.troca">Faça seu cadastro aqui</span>
            </p>
    
          </v-col>
    
          <v-col v-else>
            <h1 class="text-center">Cadastro Petshop</h1>
            <h2 class="text-center mb-10">Preencha todos os campos</h2>
    
            <v-window v-model="window">
              <v-window-item key="0">
      
                <v-text-field
                  v-model="petshop.cnpj"
                  label="CNPJ"
                  single-line
                  :rules="[rules.cnpj]"
                ></v-text-field>
      
                <v-text-field
                  v-model="petshop.senha"
                  label="Senha"
                  single-line
                  :type="show ? 'text' : 'password'"
                  :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:appendInner="show = !show"
                ></v-text-field>
    
              </v-window-item>
    
              <v-window-item key="1">
      
                <v-text-field
                  v-model="petshop.nome"
                  label="Nome do Petshop"
                  single-line
                ></v-text-field>
    
                <v-text-field
                  v-model="petshop.telefone"
                  label="Telefone"
                  single-line
                  :rules="[rules.telefone]"
                ></v-text-field>
    
                <v-row>
                  <v-col cols="8">
                    <v-text-field
                      label="CEP"
                      single-line
                      :rules="[rules.cep]"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      label="Nº Residência"
                      single-line
                    ></v-text-field>
                  </v-col>
                </v-row>
    
                <v-text-field
                  v-model="petshop.email"
                  label="Email"
                  :rules="[rules.email]"
                ></v-text-field>
    
              </v-window-item>
            </v-window>
            
            <div class="mb-5">
              <v-btn
                v-if="window > 0"
                flat
                @click="window--"
              ><v-icon>mdi-arrow-left</v-icon></v-btn>
      
              <v-btn
                flat
                color="#F8623F"
                :style="{ width: window > 0 ? '85.59%' : '100%' }"
                @click="window === 0 ? window++ : cadastra()"
              >{{ window === 0 ? 'Próximo' : 'Criar conta' }}</v-btn>
            </div>
    
            <p class="text-center">
              Já possui uma conta? <span v-on:click="this.troca">Faça seu login aqui</span>
            </p>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-main>
</template>
<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      petshop: {},
      isLogin: true,
      show: false,
      window: 0,
      rules: {
        cnpj: (v) => /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/.test(v)||'Formato de CNPJ inválido',
        telefone: (v) => /^\d{4}\-\d{4}$/.test(v)||'Telefone inválido',
        cep: (v) => /^\d{5}\-\d{3}$/.test(v)||'CEP inválido',
        email: (v) => /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(v)||'Email não corresponde com o formato válido'
      },
    }
  },

  created() {
    console.log('Pagina Index');
  },

  methods: {
    troca() {
      this.isLogin = !this.isLogin;
    },

    async login() {
      const req = {
        cnpj: this.petshop.cnpj,
        senha: this.petshop.senha,
      };
      await this.$axios.post('/petshop/login', req)
        .then((result) => {
          const { data } = result;

          if(data.type === 'success') {
            console.log(data.message);
            this.$router.push({ path: 'dashboard' });
          }

          console.log(data.message);
        }).catch((err) => {
          console.log(err);
        });
    },

    async cadastra() {
      const req = {
        nome: this.petshop.nome,
        cnpj: this.petshop.cnpj,
        email: this.petshop.email,
        telefone: this.petshop.telefone,
        senha: this.petshop.senha,
      };
      await this.$axios.post('/petshop/persist', req)
        .then((result) => {
          const { data } = result;

          if(data.type === 'success') {
            console.log(data.message);
            this.$router.push({ path: 'dashboard' });
          }

          console.log(data.message);
        }).catch((err) => {
          console.log(err);
        });
    },
  }
}
</script>

<style>
  .lexend-font {
    font-family: "Lexend", sans-serif;
    font-optical-sizing: auto;
    font-weight: normal;
    font-style: normal;
  }

  .v-text-field input {
    font-size: 16px;
  }

  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 16px;
    font-weight: normal;
  }

  p span {
    text-decoration: underline;
    color: #799FFF;
    font-size: 16px;
  }
  
  p span:hover {
    cursor: pointer;
  }
</style>