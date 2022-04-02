import {takeLatest} from '@redux-saga/core/effects';
import {handleLoginUser} from './handler/loginHandlerFunction';
import {GET_USR} from '../ducks/loginUser';

export function* watcherSaga() {
  yield takeLatest(GET_USR, handleLoginUser);
}
