import axios from "axios";

export default {
  install: (app, options) => {
    app.config.globalProperties.$axios = axios.create({
      baseURL: 'http://localhost:3333',
      responseType: 'json',
    });
  },
};