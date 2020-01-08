import Vue from 'vue';
// eslint-disable-next-line import/no-unresolved
import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import VueAxios from 'vue-axios';

// Components
import App from './App.vue';

// Tools
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
// axios默认是发送请求的时候不会带上cookie的，
// 需要通过设置withCredentials: true来解决。 这个时候需要注意需要后端配合设置：
axios.defaults.withCredentials = true;
// 自動儲存cookie
// 發送api時就會直接往後端送

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
  console.log('to', to, 'from', from, 'next', next);
  // eslint-disable-next-line no-empty
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;

    // 將用戶資料傳進
    // vm.user=帳戶跟密碼
    // this 只有在compoennt才可以使用 在router需使用axios
    axios.post(api).then(response => {
      console.log(response.data);
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
    console.log('這裡需要驗證');
  }
});
