import React from 'react';
import ErrorBoundary from '../error-boundary/error-boundary'
import Spinner from '../spinner'
import withBookstoreService from '../hoc/'
import {Route, Switch} from 'react-router-dom';

import HomePage from '../pages/home-page';
import CardPage from '../pages/card-page';
import ShopHeader from '../shop-header';


 
const App = () => { 
    return (
    <main role='main' className='container'>
    <ShopHeader />
        <Switch>
            <Route path='/' component={HomePage} exact></Route>
            <Route path='/card' component={CardPage}></Route>
        </Switch>
     </main>
        )
}

export default App;