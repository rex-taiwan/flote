import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// eslint-disable-next-line import/no-unresolved
import Login from '@/components/pages/Login.vue';
// eslint-disable-next-line import/no-unresolved
import Dashboard from '@/components/Dashboard.vue';
// eslint-disable-next-line import/no-unresolved
import Products from '@/components/pages/Products.vue';

Vue.use(VueRouter);

export default new VueRouter({
  // 應注意mode使用時 是使用後端的路由
  // 伺服器應對應此模式
  // mode: 'history',

  routes: [
    {
      name: 'Home', // 元件呈現的名稱
      path: '/', // 對應的虛擬路徑
      component: Home, // 對應的元件
    },
    {
      name: 'Login',
      path: '/login',
      component: Login,
    },

    {
      path: '/admin', // 對應的虛擬路徑
      name: 'admin',
      component: Dashboard,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
          //  確保進入這個頁面之前是需要被驗證的
        },
      ],
    },
  ],
});
