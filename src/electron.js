import store from './store';

function statusAppend(txt) {
  store.commit('status/append', txt);
  store.dispatch('status/scrollToEnd');
}


export { statusAppend };
