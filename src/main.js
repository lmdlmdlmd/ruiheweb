import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/common.scss'
import './styles/font/iconfont.css'

import { Switch, Radio, RadioGroup } from 'element-ui';
Vue.prototype.$ELEMENT = { size: 'mini' };
Vue.use(Switch);
Vue.use(Radio);
Vue.use(RadioGroup);

Vue.config.productionTip = false;


new Vue({
  router,
  data: function() {
    return {
      theme: 1
    }
  },
  render: h => h(App)
}).$mount('#app')
