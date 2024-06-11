import { createRouter, createWebHistory } from "vue-router";
import AllPosts from "./components/pages/AllPosts.vue";
import Home from "./components/pages/Home.vue";
import AddPost from "./components/pages/AddPost.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/Posts",
      name: "allPosts",
      component: AllPosts,
    },
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/CreatePost",
      name: "addPost",
      component: AddPost,
    },
  ],
});
export default router;
