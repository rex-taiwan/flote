<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
  /* eslint-disable no-alert, no-console */
  // created() {
  //     const api=`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products`;
  //     console.log(process.env.VUE_APP_APIPATH);
  //     this.$http.get(api).then((response) => {
  //     console.log(response.data);
  //     })
  // },
};
</script>
