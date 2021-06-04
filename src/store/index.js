import { createStore } from 'redux';

import rootReducer from './modules/example/rootReducer';

const store = createStore(rootReducer);

export default store;
