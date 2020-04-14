<template>
  <div class="ma-3 team">
    <h1 class="subtitle-1 grey--text">Team page</h1>
    <v-container class="my-2">
      <v-row row wrap class="my-2">
        <v-col v-for="person in team" :key="person.name" cols="12" sm="4" md="4" lg="3">
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
            <v-card-action>
              <v-btn text color="grey">
                <span>message</span>
                <v-icon small right>
                  mdi-message
                </v-icon>
              </v-btn>
            </v-card-action>
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
      team: [
        { name: 'The Net Ninja', role: 'Web developer', avatar: '/a-1.png' },
        { name: 'Ryu', role: 'Graphic designer', avatar: '/a-1.png' },
        { name: 'Chun Li', role: 'Web developer', avatar: '/a-1.png' },
        { name: 'Gouken', role: 'Social media maverick', avatar: '/a-1.png' },
        { name: 'Yoshi', role: 'Sales guru', avatar: '/a-1.png' },
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
