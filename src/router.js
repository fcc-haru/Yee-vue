import Vue from "vue";
import Router from "vue-router";
import Projects from "@/views/Projects.vue";
import Illustrations from "@/views/Illustrations.vue";
import Photography from "@/views/Photography.vue";
import Resume from "@/views/Resume.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/projects"
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/illustrations",
      name: "illustrations",
      component: Illustrations
    },
    {
      path: "/photography",
      name: "photography",
      component: Photography
    },
    {
      path: "/resume",
      name: "resume",
      component: Resume
    }
  ]
});
