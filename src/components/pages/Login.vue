<template>
  <div>
    <v-app-bar color="grey lighten-5" class="mt-2" light flat>
      <i class="menuicon ml-sm-8 ml-0" @click.stop="drawer = !drawer"
        ><v-img max-width="30" :src="menuicon" alt=""
      /></i>
      <!-- <v-toolbar-title>Page title</v-toolbar-title> -->

      <v-spacer></v-spacer>
      <v-img :src="logo" alt="" max-width="200" class="mr-sm-6 mr-2"></v-img>
    </v-app-bar>

    <v-container style="height:500px;" class="mt-5">
      <div class="d-flex justify-sm-end justify-center">
        <v-form class="mt-12" ref="form" @submit.prevent="signin">
          <h1 class="font-weight-bold display-1" style="max-width:200px;">
            Welcome to FLote
          </h1>
          <v-text-field
            class="mt-9 font-weight-bold"
            v-model="user.username"
            :counter="10"
            label="Username"
            required
          ></v-text-field>

          <v-text-field
            class="mt-5 font-weight-bold"
            v-model="user.password"
            label="Password"
            required
          ></v-text-field>

          <v-btn color="black white--text" class="mr-4 mt-10" outlined rounded>
            Create Account
          </v-btn>

          <v-btn
            class="black white--text mt-10"
            rounded
            @click.prevent="signin"
          >
            Login
          </v-btn>
        </v-form>
      </div>
    </v-container>

    <div class="d-flex  mx-12" color="grey lighten-5" style="margin-top:150px;">
      <div class="grey  lighten-5">
        <p class="font-weight-bold caption">88 Rdhll Rd. Singapore</p>
        <p class="font-weight-bold caption">+ 65 9223 8900</p>
        <p class="font-weight-bold caption">lote@gmail.com</p>
      </div>

      <div class="grey ml-auto lighten-5">
        <p class="font-weight-bold caption">Terms & Conditions</p>
        <p class="font-weight-bold caption">2019 All Rights Reserved</p>
      </div>
    </div>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      app
      width="800"
      overlay-color="black"
    >
      <v-icon
        class="d-flex justify-end mt-sm-12 mt-5 mr-9"
        @click.stop="drawer = false"
        >mdi-close</v-icon
      >
      <v-container fill-height>
        <v-row>
          <v-col cols="5">
            <v-list-item two-line style="height:5%;">
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold headline">
                  New Arrivals
                </v-list-item-title>
                <v-list-item-title class="font-weight-bold headline"
                  >Best Sellers</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item two-line style="height:40%;">
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

            <v-list-item two-line style="height:30%;">
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

          <v-col cols="7">
            <v-img :src="sideimage1" alt="" />
            <v-row>
              <v-col cols="6">
                <v-img :src="sideimage2" alt="" />
              </v-col>
              <v-col cols="6">
                <v-img :src="sideimage3" alt="" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      user: {
        username: '',
        password: '',
      },
      menuicon: './menuicon.svg',
      logo: './flote.svg',
      sideimage1: './sideimage1.svg',
      sideimage2: './sideimage2.svg',
      sideimage3: './sideimage3.svg',
    };
  },
  /* eslint-disable no-alert, no-console */
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      const vm = this;
      // 將用戶資料傳進
      // vm.user=帳戶跟密碼
      this.$http.post(api, vm.user).then(response => {
        console.log(response.data);
        if (response.data.success) {
          // router 寫法 將會傳到首頁
          vm.$router.push('/admin/products');
        }
      });
    },
  },
};
</script>
