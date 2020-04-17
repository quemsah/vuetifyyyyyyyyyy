<template>
  <div class="ma-3">
    <h1 class="subtitle-1 grey--text">Gang page</h1>
    <v-container class="my-2">
      <v-row row wrap class="my-2">
        <v-col v-for="person in gang" :key="person.name" cols="12" sm="4" md="4" lg="3">
          <v-card text class="text-center ma-1 pa-3">
            <v-responsive>
              <v-avatar size="100" class="grey lighten-4">
                <img :src="getImgUrl(person.avatar)" />
              </v-avatar>
            </v-responsive>
            <v-card-text class="py-3">
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions align="center" justify="center">
              <v-spacer></v-spacer>
              <v-btn text color="grey">
                <span>message</span>
                <v-icon small right>
                  mdi-message
                </v-icon>
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gang: [
        { name: 'Little Jacob', role: 'Arms/drug dealer', avatar: '/a-1.png' },
        { name: '​Brucie Kibbutz', role: 'Driver', avatar: '/a-1.png' },
        { name: 'Kiki Jenkins', role: 'Lawyer', avatar: '/a-1.png' },
        { name: 'Dwayne', role: '"Old-school" gangster', avatar: '/a-1.png' },
        { name: 'Francis McReary', role: 'Corrupt cop', avatar: '/a-1.png' },
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      return require('../assets/avatars' + pic);
    },
  },
};
</script>
