<template>
  <div>
    <v-app-bar color="grey lighten-5" class="mt-2" light flat>
      <i class="menuicon ml-sm-8 ml-0" @click.stop="drawer = !drawer"
        ><v-img max-width="30" :src="menuicon" alt=""
      /></i>

      <!-- <v-toolbar-title>Page title</v-toolbar-title> -->

      <v-spacer></v-spacer>
      <router-link to="/login">
        <v-btn text class="text-capitalize">Login</v-btn>
      </router-link>

      <v-btn text class="text-capitalize">Sign Up</v-btn>
      <!-- <v-menu left bottom offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
             <v-icon>mdi-account-outline</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>Admin</v-list-item-title>
            
          </v-list-item>
           
        </v-list>
      </v-menu> -->
    </v-app-bar>

    <!-- v-model -->

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
      menuicon: './menuicon.svg',
      sideimage1: './sideimage1.svg',
      sideimage2: './sideimage2.svg',
      sideimage3: './sideimage3.svg',
      drawer: null,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' },
      ],
    };
  },
};
</script>
