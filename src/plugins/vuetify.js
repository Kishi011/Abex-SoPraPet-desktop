// configurando vue para rodar junto com vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'; // importa todos os componentes
import * as directives from 'vuetify/directives'; // importa todas as diretivas
import { aliases, mdi } from 'vuetify/iconsets/mdi';

// criando uma instância do vuetify eu acho
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});

export default vuetify;