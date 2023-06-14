// src/index.js
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import App from "./App.vue";
import Home from './pages/Home.vue'
import Page from './pages/Page.vue'
import Page2 from './pages/Page2.vue'

const routes = [{ path: "/", component: Home }, {path: "/page", component: Page}, {path: "/page2", component: Page2} ];
const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount("#root");