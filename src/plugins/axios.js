import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:8080', // AQUI TEM QUE DEFINIR A URL DO SERVIDOR DO SÓPRAPET. MAS ISSO É SÓ BEM DEPOIS DO PROJETO, POR ENQUANTO VAMOS CLONAR O SERVIDOR DO GIT E FAZER ELE LOCAL MESMO
  timeout: 1000,
});

export default api;