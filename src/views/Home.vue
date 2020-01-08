<template>
  <div class="home">
    <Navbar></Navbar>
    <v-img
      :src="logo"
      alt=""
      class="mx-auto d-flex justify-center"
      style="margin-top:200px;"
      max-width="800"
    ></v-img>

    <div class="d-flex justify-center font-weight-bold mt-4">
      Shop collection
      <v-icon>mdi-chevron-double-right</v-icon>
    </div>

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
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  name: 'home',
  data() {
    return {
      logo: './flote.svg',
    };
  },
};
</script>
