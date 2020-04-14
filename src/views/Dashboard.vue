<template>
  <div class="ma-3 dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container class="my-2">
      <v-row class="mb-4 px-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span right class="caption text-lowercase">by project name</span>
            </v-btn>
          </template>
          <span>Sorts projects by name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span right class="caption text-lowercase">by person</span>
            </v-btn>
          </template>
          <span>Sorts projects by person</span>
        </v-tooltip>
      </v-row>
      <v-card v-for="project in projects" :key="project.title" text class="my-2">
        <v-row row wrap :class="`py-3 mx-0 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>

          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>

          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">Due Date</div>
            <div>{{ project.due }}</div>
          </v-col>

          <v-col xs="6" sm="4" md="2">
            <div class="right">
              <v-chip small :class="`${project.status} white--text caption my-2`">
                {{ project.status }}
              </v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'Design a new website',
          person: 'The Net Ninja',
          due: '1st Jan 2019',
          status: 'ongoing',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
        },
        {
          title: 'Code up the homepage',
          person: 'Chun Li',
          due: '10th Jan 2019',
          status: 'complete',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
        },
        {
          title: 'Design video thumbnails',
          person: 'Ryu',
          due: '20th Dec 2018',
          status: 'complete',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
        },
        {
          title: 'Create a community forum',
          person: 'Gouken',
          due: '20th Oct 2018',
          status: 'overdue',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
        },
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>

<style lang="scss">
.project {
  &.complete {
    border-left: 4px solid #3cd1c2 !important;
  }
  &.ongoing {
    border-left: 4px solid orange !important;
  }
  &.overdue {
    border-left: 4px solid tomato !important;
  }
}

.v-card {
  word-break: normal;
}

.v-chip {
  &.complete {
    background: #3cd1c2 !important;
  }
  &.ongoing {
    background: orange !important;
  }
  &.overdue {
    background: tomato !important;
  }
}
</style>
