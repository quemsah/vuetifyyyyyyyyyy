<template>
  <div class="ma-3 dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container class="my-2">
      <v-row class="mb-4 px-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span right class="caption text-lowercase">by task name</span>
            </v-btn>
          </template>
          <span>Sorts tasks by name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span right class="caption text-lowercase">by person</span>
            </v-btn>
          </template>
          <span>Sorts tasks by person</span>
        </v-tooltip>
      </v-row>
      <v-card v-for="task in tasks" :key="task.title" text class="my-2">
        <v-row row wrap :class="`py-3 mx-0 task ${task.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Task Title</div>
            <div>{{ task.title }}</div>
          </v-col>

          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{ task.person }}</div>
          </v-col>

          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">Due Date</div>
            <div>{{ task.due }}</div>
          </v-col>

          <v-col xs="6" sm="4" md="2">
            <div class="right">
              <v-chip small :class="`${task.status} white--text caption my-2`">
                {{ task.status }}
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
      tasks: [
        {
          title: 'do a Lorem ipsum dolor',
          person: 'Little Jacob',
          due: '20th Apr 2020',
          status: 'ongoing',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
        },
        {
          title: 'do a Lorem ipsum dolor',
          person: 'Kiki Jenkins',
          due: '20th Mar 2020',
          status: 'complete',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
        },
        {
          title: 'do a Lorem ipsum dolor',
          person: 'Francis McReary',
          due: '20th Feb 2020',
          status: 'overdue',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',
        },
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.tasks.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>

<style lang="scss">
.task {
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
