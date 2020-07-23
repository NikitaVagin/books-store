import {put, takeEvery, all} from 'redux-saga/effects'

const delay = (ms:number) =>  new Promise(res => setTimeout(res, ms));

 function* helloAsync() {
    yield delay(3000)
    console.log('hello world!!!')
}

 function* watchAddBooks() {
    yield takeEvery ('BOOK_ADDED_TO_CART', helloAsync);
}



export default function* rootSaga() {
        yield all([
            watchAddBooks()
        ])
}