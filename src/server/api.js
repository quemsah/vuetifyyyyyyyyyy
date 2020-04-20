import { Server } from 'miragejs';

import database from './db';
import { Helpers } from '../utils/helpers';

new Server({
  seeds(server) {
    server.db.loadData(database);
  },

  routes() {
    this.timing = Helpers.randomInteger(250, 750);
    this.namespace = 'api';

    this.get('/gang', (schema) => {
      return schema.db.gang;
    });

    this.get('/tasks', (schema) => {
      return schema.db.tasks;
    });

    // this.get('/todos', (schema) => {
    //   return schema.db.todos;
    // });

    this.post('/tasks', (schema, request) => {
      const task = JSON.parse(request.requestBody).data;

      return schema.db.tasks.insert({
        title: task.title,
        desc: task.contdescent,
        due: task.due,
        status: task.status,
        person: task.person,
      });
    });

    // this.patch('/todos/:id', (schema, request) => {
    //   const todo = JSON.parse(request.requestBody).data;

    //   return schema.db.todos.update(todo.id, todo);
    // });

    // this.delete('/todos/:id', (schema, request) => {
    //   return schema.db.todos.remove(request.params.id);
    // });
  },
});
