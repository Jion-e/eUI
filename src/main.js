import Vue from 'vue';
import App from './app';

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// import 'bootstrap/less/bootstrap.less'

Vue.use(Element)

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
  // components: { App }
});
