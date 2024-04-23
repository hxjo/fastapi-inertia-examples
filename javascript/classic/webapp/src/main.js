import "./assets/main.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import {resolvePageComponent} from "@/helper.js";

createInertiaApp({
  resolve: (name) => {
    return resolvePageComponent(`./Pages/${name}.vue`,
      import.meta.glob("./Pages/**/*.vue"),
    )
    // const pages = import.meta.glob("./Pages/**/*.vue");
    // return pages[`./Pages/${name}.vue`];
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el);
  },
});
