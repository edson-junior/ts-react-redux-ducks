import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleWare from 'redux-saga';
import { RepositoriesState } from "./ducks/repositories/types";

import rootReducer from "./ducks/rootReducer";
import rootSaga from './ducks/rootSagas'


export interface ApplicationState {
  repositories: RepositoriesState
}

const sagaMiddleWare = createSagaMiddleWare()
const store: Store<ApplicationState> =  createStore(rootReducer, applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(rootSaga)

export default store