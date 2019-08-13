import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import StatusBar from '@/components/StatusBar';
import BrowserWarn from '@/components/BrowserWarn';
import Veil from '@/components/Veil';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import VueSlideoutPanel from 'vue2-slideout-panel';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

import messages from '@/i18n';

const i18n = new VueI18n({
  locale: window.navigator.language.slice(0, 2),
  fallbackLocale: 'en',
  messages
});

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
  faCloudUploadAlt,
  faKeyboard,
  faChevronLeft,
  faPrint,
  faUndo,
  faTrash,
  faHatWizard,
  faMagic
} from '@fortawesome/free-solid-svg-icons';
import {
  faApple,
  faWindows,
  faLinux
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ga from './ga';
// Electron specific Code
if (
  typeof navigator === 'object' &&
  typeof navigator.userAgent === 'string' &&
  navigator.userAgent.indexOf('Electron') >= 0
) {
  window.electron = true; //We set a global value to be used later
  //We use the Bridge as a way to share functions between electron and vue
  window.Bridge.statusAppend = txt => {
    txt = '\n' + txt;
    store.commit('status/append', txt);
    store.dispatch('status/scrollToEnd');
  };
} else {
  window.electron = false;
}
// End of electon specific code

Vue.component('Veil', Veil);
Vue.component('v-select', vSelect);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueSlideoutPanel);

library.add(faDownload);
library.add(faCloudUploadAlt);
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
library.add(faPrint);
library.add(faUndo);
library.add(faTrash);
library.add(faHatWizard);
library.add(faMagic);

ga.init(router);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');

new Vue({
  i18n,
  render: h => h(StatusBar)
}).$mount('#status-app');

new Vue({
  i18n,
  render: h => h(BrowserWarn)
}).$mount('#browser-warn-container');
