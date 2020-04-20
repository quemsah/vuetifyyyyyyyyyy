<template>
  <div class="ma-3 tasks">
    <h1 class="subtitle-1 grey--text">Tasks page</h1>
    <v-container class="my-2">
      <div v-if="isTasksDataLoading">
        <PageLoader />
      </div>
      <v-expansion-panels focusable>
        <v-expansion-panel v-for="task in myTasks" :key="task.title">
          <v-expansion-panel-header>{{ task.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat>
              <v-card-text class="pa-0 pt-4 grey--text">
                <div class="font-weight-bold">Due by: {{ task.due }}</div>
                <div>{{ task.desc }}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
    };
  },
  computed: {
    myTasks() {
      return this.tasks.filter((task) => task.person === 'Little Jacob');
    },
  },
  created() {
    this.isTasksDataLoading = true;
    axios
      .get('/api/tasks')
      .then((response) => {
        this.tasks = response.data;
        this.isTasksDataLoading = false;
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
};
</script>
