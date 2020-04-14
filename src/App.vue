<template>
  <v-app class="grey">
    <Navbar />
    <v-content class="grey lighten-3">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: { Navbar },
  data: () => ({
    //
  }),
};
</script>
