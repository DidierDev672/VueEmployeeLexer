import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from "./router";
import store from "./store";

const app = createApp(App);

app.use(routes);
app.use(store);
app.mount("#app");