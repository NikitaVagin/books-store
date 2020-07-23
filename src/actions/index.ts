import { type } from "os"

const booksLoaded = (newBooks:any) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}
const booksRequested = () =>{
    return {
        type: 'FETCH_BOOKS_REQUEST',
    }
}

const booksError = (error:any) =>{
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

const bookAddedToCard = (id:any) => {
    return {
        type: "BOOK_ADDED_TO_CART",
        payload: id
    }
}

const onDecreaseBook = (id:number) => {
    return {
        type: 'BOOK_ON_DECREASE',
        payload: id
    }
}

const onDeleteBook = (id:number) => {
    return {
        type: 'BOOK_ON_DELETE',
        payload: id
    }
}


const fetchBooksOld = (bookstoreService:any, dispatch:any) => () => {
    dispatch(booksRequested()) ;
     bookstoreService.getBooks()
    .then((data:any) =>{
    dispatch( booksLoaded(data));
    })
    .catch((error:any) => {
     dispatch(booksError(error));
    })
}
const fetchBooks = (bookstoreService:any) => () => (dispatch:any) => {
    dispatch(booksRequested()) ;
     bookstoreService.getAllNewBooks()
    .then((data:any) =>{
    dispatch( booksLoaded(data));
    })
    .catch((error:any) => {
     dispatch(booksError(error));
    })
}

export {
    fetchBooks,
    bookAddedToCard,
    onDecreaseBook,
    onDeleteBook
};