<template>
  <nav>
    <!-- header nav-->
    <v-app-bar flat app class="grey lighten-2">
      <!-- left menu icon -->
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- menu title -->
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>List</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text color="grey" v-on="on">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in links" :key="link.route" router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- dsign out button -->
      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- left menu -->
    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-row no-gutters>
        <v-col align="center" class="mt-6">
          <v-avatar size="100" class="grey lighten-4">
            <img src="../assets/logo.png" alt="Page logo" />
          </v-avatar>
          <p class="white--text subheadding mb-0 mt-3">yo</p>
        </v-col>
      </v-row>
      <v-row class="my-3" justify="center">
        <Popup />
      </v-row>
      <v-list class="primary">
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">
              {{ link.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text"> {{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from './Popup.vue';

export default {
  components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/dashboard' },
        { icon: 'mdi-folder-multiple', text: 'My tasks', route: '/tasks' },
        { icon: 'mdi-account', text: 'Gang', route: '/gang' },
      ],
    };
  },
};
</script>
