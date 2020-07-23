import React from 'react';
import './shop-header.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const ShopHeader = ({ numItems, total }:any) => {
  return (
    <header className="shop-header row">
        <Link to='/'><div className="logo text-dark">ReStore</div></Link>
        <Link to='/card'>
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {numItems} items (${total})
        </div>
        </Link>
    </header>
  );
};

const mapStateToProps = (state:any) =>{
    return {
      numItems: state.shoppingCart.cartQty,
      total: state.shoppingCart.orderTotal
    }
}

export default connect(mapStateToProps)(ShopHeader);
