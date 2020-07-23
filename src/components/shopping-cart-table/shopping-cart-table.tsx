import React from 'react';
import {connect} from 'react-redux';
import {bookAddedToCard, onDecreaseBook, onDeleteBook} from '../../actions';


import './shopping-cart-table.css';

type ShoppingCartTableType = {
    items: any,
    total: any,
    inIncrease: any,
    onDecrease: any,
    onDetlete: any
}

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete, qty }:any) => {
  const renderRow = (data:any, idx:number) => {
    const {id, title, count, total  } = data;
       return (
      <tr key={id}>
      <td>{idx+1}</td>
      <td>{title}</td>
      <td>{count}</td>
      <td>${total}</td>
    <td>
      <button onClick={() => onDelete(id)} className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
      <button onClick={() => onIncrease(id)} className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-plus-circle" />
      </button>
      <button onClick={() => onDecrease(id)} className="btn btn-outline-warning btn-sm float-right">
        <i className="fa fa-minus-circle" />
      </button>
    </td>
  </tr>
      )
    }

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(renderRow)  
          }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal, cartQty}}:any) => {
    return {
      items: cartItems,
      total: orderTotal,
      qty: cartQty

    }
}
const mapDispatchToProps= (dispatch:any) => {
  return {
    onIncrease: (id:any) => dispatch(bookAddedToCard(id)),
    onDecrease: (id:any) => dispatch(onDecreaseBook(id)),
    onDelete: (id:any) => dispatch(onDeleteBook(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
