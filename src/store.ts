import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const store = createStore(reducer, applyMiddleware(thunkMiddleware, sagaMiddleware, logger));



const delayedActionCreator = (timeout:number) => (dispatch:any) =>{
    setTimeout(() => dispatch({
        type: 'DEALAYDED_ACTION'
    }), timeout);
}
sagaMiddleware.run(rootSaga);
store.dispatch(delayedActionCreator(3000));


export default store;