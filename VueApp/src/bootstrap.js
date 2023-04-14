import { createApp } from "vue";
import Dashboard from "./components/VueAppMain";

const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

  const devRoot = document.querySelector("#dev-root");

  if (devRoot) {
    mount(devRoot);
  }

export { mount };

