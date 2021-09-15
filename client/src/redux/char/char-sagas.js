import { all, call, put, takeLatest } from 'redux-saga/effects';
import { USER_LOGOUT_SUCCESS } from '../user/user.actions';
import { clearChart } from './cart-action';



export function* sagaClearChart (){
    yield put(clearChart())
}

export function* onClearChart(){
    yield takeLatest(USER_LOGOUT_SUCCESS, sagaClearChart)

}

export function* chartSaga(){
    yield all([

        call(onClearChart)

    ])
} 