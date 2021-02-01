import { call, put } from 'redux-saga/effects'
import api from '../../../services/apis'
import { loadFailure, loadSuccess } from './actions'

export function* load() {
  try {
    const response = yield call(api.get, 'users/edson-junior/repos')
    yield put(loadSuccess(response.data))
  } catch (error) {
    yield put(loadFailure())
  }
}