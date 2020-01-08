<template>
  <div>
    <v-app-bar color="grey lighten-5" class="mt-2" light flat>
      <i class="menuicon ml-sm-8 ml-0" @click.stop="admindrawer = !admindrawer"
        ><v-img max-width="30" :src="menuicon" alt=""
      /></i>
      <!-- <v-toolbar-title>Page title</v-toolbar-title> -->

      <v-spacer></v-spacer>

      <v-img :src="logo" alt="" max-width="150" class="mr-sm-6 mr-2"></v-img>
    </v-app-bar>

    <v-navigation-drawer
      v-model="admindrawer"
      absolute
      app
      width="500"
      overlay-color="black"
      temporary
    >
      <v-icon
        class="d-flex justify-end mt-sm-2 mt-5 mr-9"
        @click.stop="admindrawer = false"
        >mdi-close</v-icon
      >
      <v-container fill-height>
        <v-row>
          <v-col cols="5">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold headline">
                  New Arrivals
                </v-list-item-title>
                <v-list-item-title class="font-weight-bold headline"
                  >Best Sellers</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold headline">
                  Outerwear
                </v-list-item-title>
                <v-list-item-title class="font-weight-bold headline"
                  >Tops</v-list-item-title
                >
                <v-list-item-title class="font-weight-bold headline"
                  >Bottom</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold headline">
                  About Us
                </v-list-item-title>
                <v-list-item-title class="font-weight-bold headline"
                  >FAQ</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-col>

          <v-col cols="7"> </v-col>
        </v-row>
        <v-btn text class="font-weight-bold" @click.prevent="signout"
          ><v-icon>mdi-logout</v-icon>Sign Out</v-btn
        >
      </v-container>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: './flote.svg',
      menuicon: './menuicon.svg',
      sideimage1: './sideimage1.svg',
      sideimage2: './sideimage2.svg',
      sideimage3: './sideimage3.svg',
      admindrawer: null,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' },
      ],
    };
  },
  methods: {
    signout() {
      const api = `${process.env.VUE_APP_APIPATH}/logout`;
      const vm = this;
      // 將用戶資料傳進
      // vm.user=帳戶跟密碼
      this.$http.post(api).then(response => {
        console.log(response.data);
        if (response.data.success) {
          // router 寫法 將會傳到首頁
          vm.$router.push('/login');
        }
      });
    },
  },
};
</script>
