<template>
  <div class="ma-3 tasks">
    <h1 class="subtitle-1 grey--text">Tasks page</h1>
    <v-container class="my-2">
      <v-expansion-panels focusable>
        <v-expansion-panel v-for="task in myTasks" :key="task.title">
          <v-expansion-panel-header>{{ task.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card flat>
              <v-card-text class="pa-0 pt-4 grey--text">
                <div class="font-weight-bold">Due by: {{ task.due }}</div>
                <div>{{ task.content }}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
  computed: {
    myTasks() {
      return this.tasks.filter((task) => task.person === 'Little Jacob');
    },
  },
};
</script>
