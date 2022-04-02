import {put, call} from 'redux-saga/effects';
import {requestPostUser} from '../request/loginRequest';
import {setUser} from '../../ducks/loginUser';
export function* handleLoginUser(action) {
  console.log('data is:!...', action);
  try {
    const response = yield call(requestPostUser, action.userData);
    const {data} = response;
    console.log('login handler user is:!...', data, response);
    yield put(setUser(response));
  } catch (error) {
    console.log('error in API Call is:!...', error);
  }
}
