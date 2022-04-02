import createSagaMiddleware from '@redux-saga/core';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import loginUser from './redux/ducks/loginUser';
import {watcherSaga} from './redux/sagas/rootSaga';
const reducer = combineReducers({
  user: loginUser,
});
const sagaMiddleWare = createSagaMiddleware();
const middleWare = [sagaMiddleWare];
const store = createStore(reducer, {}, applyMiddleware(...middleWare));
sagaMiddleWare.run(watcherSaga);
export default store;
