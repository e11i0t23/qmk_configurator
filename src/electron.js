import store from './store';

function statusAppend(txt){
  store.commit(
    'status/append',
    txt
  )
}

export {
  statusAppend
}
