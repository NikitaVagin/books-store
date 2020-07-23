import React from 'react';
import BookListItem from '../book-list-item';
import './book-list.css'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import withBookstoreService from '../hoc';
import {fetchBooks, bookAddedToCard} from '../../actions/';
import {compose} from '../../utils/';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const BookList = ({books, onAddedToCart}:any) => {
    return (
        <ul className='book-list'>
            {
                books.map((book: any) =>{
                    return <li key={book.id}><BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)}/></li>
                })  
            }
        </ul>
     )
}


type BookListType = {
    books: Array<any>
    booksLoaded: any,
    loding: boolean
    bookstoreService?: {},
    fetchBooks: Function,
    onAddedToCart: Function

}

class BookListContainer extends React.Component<BookListType>{

    componentDidMount() {
       this.props.fetchBooks()
    }

    render() {
        const {books, loading, error, onAddedToCart}:any = this.props;
        if(loading){
            return <Spinner />
        }
        if(error) {
           return <ErrorIndicator />
        }
        return <BookList  books={books} onAddedToCart={onAddedToCart}/>
    }
}


const mapStateToProps = ({bookList: {books, loading, error}}:any) => {
    return {
        books,
        loading,
        error
    }
}

const mapDispatchToProps = (dispatch:any, {bookstoreService}:any) => {
    return bindActionCreators ({
        fetchBooks: fetchBooks(bookstoreService),
        onAddedToCart: bookAddedToCard
    }, dispatch)
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(BookListContainer);


    
    