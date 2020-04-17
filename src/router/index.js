import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Task from '../views/Task.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/tasks',
    name: 'Task',
    component: Task,
  },
  {
    path: '/gang',
    name: 'Gang',
    component: () => import('../views/Gang.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
