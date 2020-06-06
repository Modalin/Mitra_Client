import { createStore, applyMiddleware } from 'redux';
import thunk from './middlewares/thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;