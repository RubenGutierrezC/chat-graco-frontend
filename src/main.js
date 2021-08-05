import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/scss/bootstrap.scss";
import SocketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io";

// const options = { path: '/my-app/' }; //Options object to pass into SocketIO

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO("http://localhost:4030"), //options object is Optional
  })
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
