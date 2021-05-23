import { combineReducers, createStore } from 'redux';
import gameReducer from './actions/reducers/gameReducer';
import userReducer from './actions/reducers/userReducer';
const rootReducer = combineReducers({
  game: gameReducer,
  user: userReducer,
});

const store = createStore(rootReducer);
console.log(store.getState()); // 0
export default store;
