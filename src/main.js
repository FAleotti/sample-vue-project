import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import UsersView from "./components/UsersView.vue";
import UserDetailsView from "./components/UserDetailsView.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import UserPosts from "./components/UserPosts.vue";

const routes = [
  { path: "/", component: UsersView },
  { path: "/user/:id", component: UserDetailsView },
  { path: "/user/:id/posts", name: "posts", component: UserPosts}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
