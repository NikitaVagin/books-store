import React from 'react';
import BookstoreService from '../../services/bookstore-service'

const bookstoreservice = new BookstoreService();
const {Provider: BookStoreProvider, 
    Consumer: BookStoreConsumer} = React.createContext(bookstoreservice);

export {
    BookStoreProvider,
    BookStoreConsumer
}