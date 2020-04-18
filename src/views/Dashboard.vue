<template>
  <div class="ma-3 dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container class="my-2">
      <div v-if="isTasksDataLoading">
        <PageLoader />
      </div>
      <div v-else>
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
      </div>
    </v-container>
  </div>
</template>

<script>
import PageLoader from '@/components/PageLoader.vue';

import axios from 'axios';

export default {
  components: { PageLoader },
  data() {
    return {
      tasks: [],
      isTasksDataLoading: false,
    };
  },
  created() {
    this.isTasksDataLoading = true;
    axios
      .get('/api/tasks')
      .then((response) => {
        this.tasks = response.data;
        this.isTasksDataLoading = false;
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
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
