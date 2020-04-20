<template>
  <div class="text-center">
    <v-dialog v-model="isDialogOn" width="500">
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
              :rules="inputTitleRules"
              prepend-icon="mdi-folder-information-outline"
              clearable
            >
            </v-text-field>

            <v-textarea
              v-model="desc"
              label="Information"
              :rules="inputDescRules"
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
              <v-btn text class="success mx-8" :loading="isSubmitReqLoading" @click="onSubmit()"
                >Add Task</v-btn
              >
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import axios from 'axios';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

export default {
  data() {
    return {
      title: '',
      desc: '',
      due: '',
      pickerMenu: false,
      inputTitleRules: [(x) => (x && x.length >= 5) || 'Minimum length is 5'],
      inputDescRules: [(x) => (x && x.length >= 10) || 'Minimum length is 10'],
      isSubmitReqLoading: false,
      isDialogOn: false,
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
        this.isSubmitReqLoading = true;
        axios
          .post('/api/tasks', {
            data: {
              title: this.title,
              desc: this.desc,
              due: this.due,
              status: 'open',
              person: 'Not assigned',
            },
          })
          .then(() => {
            this.isSubmitReqLoading = false;
            this.isDialogOn = false;
          });
        this.newTodo = '';
      }
    },
  },
};
</script>
