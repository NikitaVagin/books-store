import React from 'react';
import {BookStoreConsumer} from '../bookstore-service-context/bookstore-service-context'

const withBookstoreService = () => (Wrapped: any) => (props: any) => {
            return (
                <BookStoreConsumer>
                    {
                        (bookstoreService) =>  {
                            return (<Wrapped {...props} bookstoreService={bookstoreService}/>);
                        }
                    }
                </BookStoreConsumer>
            );
}

export default withBookstoreService;