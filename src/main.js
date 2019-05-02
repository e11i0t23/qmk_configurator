import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import StatusBar from '@/components/StatusBar';
import Veil from '@/components/Veil';
import vSelect from 'vue-select';
import ga from './ga';
import 'setimmediate';
import VueSlideoutPanel from 'vue2-slideout-panel';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faDownload,
  faUpload,
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faExclamationTriangle,
  faCog,
  faKeyboard,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import {
  faApple,
  faWindows,
  faLinux
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { statusAppend } from './electron';

// Electron specific Code
if (
  typeof navigator === 'object' &&
  typeof navigator.userAgent === 'string' &&
  navigator.userAgent.indexOf('Electron') >= 0
) {
  window.electron = true; //We set a global value to be used later
  //We use the Bridge as a way to share functions between electron and vue
  window.Bridge.statusAppend = txt => statusAppend(txt);
} else {
  window.electron = false;
}
// End of electon specific code

Vue.component('Veil', Veil);
Vue.component('v-select', vSelect);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueSlideoutPanel);

library.add(faDownload);
library.add(faUpload);
library.add(faArrowUp);
library.add(faArrowDown);
library.add(faArrowLeft);
library.add(faArrowRight);
library.add(faApple);
library.add(faWindows);
library.add(faLinux);
library.add(faCog);
library.add(faKeyboard);
library.add(faExclamationTriangle);
library.add(faChevronLeft);

ga.init(router);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

new Vue({
  render: h => h(StatusBar)
}).$mount('#status-app');
