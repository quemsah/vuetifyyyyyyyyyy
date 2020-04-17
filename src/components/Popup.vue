<template>
  <div class="text-center">
    <v-dialog width="500">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">Add New Task</v-btn>
      </template>
      <v-card>
        <v-card-title class="justify-center headline lighten-2" primary-title>
          Add a New Task
        </v-card-title>
        <v-card-text>
          <v-form ref="form" class="px-3">
            <v-text-field
              v-model="title"
              label="Title"
              :rules="InputRules"
              prepend-icon="mdi-folder"
            >
            </v-text-field>

            <v-textarea
              v-model="content"
              label="Information"
              :rules="InputRules"
              prepend-icon="mdi-rename-box"
            ></v-textarea>

            <v-menu
              v-model="pickerMenu"
              :close-on-content-click="true"
              :nudge-right="30"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="due"
                  label="Due date"
                  prepend-icon="mdi-calendar-range"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="due" @input="pickerMenu = false"></v-date-picker>
            </v-menu>

            <div align="center">
              <v-btn text class="success mx-8" @click="onSubmit()">Add Task</v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

export default {
  data() {
    return {
      title: '',
      content: '',
      due: null,
      pickerMenu: false,
      InputRules: [(x) => (x && x.length >= 5) || 'Minimum length is 5'],
    };
  },
  computed: {
    formattedDate() {
      return this.due ? format(parseISO(this.due), 'do MMM yyyy') : '';
    },
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        console.log(this.title, this.content);
      }
    },
  },
};
</script>
