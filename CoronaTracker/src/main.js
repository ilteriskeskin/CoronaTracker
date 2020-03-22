import Vue from 'vue'
import App from './App.vue'
import vSelect from "vue-select";

Vue.component("v-select", vSelect);

new Vue({
  el: '#app',
  render: h => h(App)
})
