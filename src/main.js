import Vuetify from 'vuetify/lib';
import Vue from 'vue';

// Components
import App from './App.vue';

// Tools
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.use(Vuetify);
const vuetify = Vuetify({});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
