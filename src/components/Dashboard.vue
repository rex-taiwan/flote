<template>
  <div>
    <adminNavbar></adminNavbar>

    <router-view></router-view>
  </div>
</template>

<script>
import adminNavbar from '@/components/pages/adminNavbar.vue';

export default {
  components: {
    adminNavbar,
  },
  data() {
    return {
      admindrawer: null,
      menuicon: './menuicon.svg',
      logo: './flote.svg',
    };
  },
};
</script>
