import { createStore } from '@reatom/core';

function configureStore() {
  return createStore();
}

export const store = configureStore();
