import Vue from 'vue'
import App from './App'
import "@/assets/style/public.scss";
import "@/assets/style/flex.scss";
import "@/assets/style/kgjIcon.scss";
import dayjs from 'dayjs'
import store from "@/store"
// import "@/assets/style/cover.scss";

Vue.config.productionTip = false
Vue.prototype.$day = dayjs;

App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
