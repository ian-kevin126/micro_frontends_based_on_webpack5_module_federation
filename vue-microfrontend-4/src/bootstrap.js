import { createApp } from "vue";
import Dashboard from "./App.vue";

// Mount function to start up the app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el); // this a function from Vue.
};

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#vue-microfrontend-4");

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container and we should export the mount function
export { mount };
