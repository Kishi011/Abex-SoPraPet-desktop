import axios from "axios";

export default {
  install: (app, options) => {
    app.config.globalProperties.$axios = axios.create({
      baseURL: 'https://pokeapi.co/api/v2',
      responseType: 'json',
    });
  },
};