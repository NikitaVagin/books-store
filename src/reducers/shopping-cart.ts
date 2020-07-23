const updateCartItem = (book:any, item:any = {}, quantity:any) =>{
    const {id = book.id, count = 0, title = book.title, total = 0} = item;
    const totalCartItem = total + quantity * book.price;
    const totalCartFix = Number(totalCartItem.toFixed(2));
    return {
        id,
        title,
        count: count + quantity,
        total: totalCartFix
    }
    
}



const updateCartItems = (cartItems:any, item:any, index:any) => {

    if(item.count === 0) {
        return [
            ...cartItems.slice(0, index),
            ...cartItems.slice(index +1)
        ]
    }
    if(index === -1) {
        return [
            ...cartItems,
            item
        ]
    }
    return [
        ...cartItems.slice(0, index),
        item,
        ...cartItems.slice(index +1)
    ]

}

const updateOrder = (state:any, bookId:any, quantity:any) =>{
    const {shoppingCart: {cartItems}, bookList: {books} } = state;
    const indexItem = cartItems.findIndex(({id}:any) => id === bookId)
    const item = cartItems[indexItem];
    const book:any = books.find(({id}:any) => id === bookId)
    let newItem:any= updateCartItem(book, item, quantity);
    const cartItemsUpd = updateCartItems(cartItems, newItem, indexItem);
    const orderTotal = cartItemsUpd.reduce((result:any, cartItem:any) => result + cartItem.total, 0);
    const orderTotalFix = Number(orderTotal.toFixed(2));
    const cartQty = cartItemsUpd.reduce((result, cartItem) => result + cartItem.count, 0);

    return {
        cartItems: cartItemsUpd,
        orderTotal: orderTotalFix,
        cartQty: cartQty
    }
}



const updateShoppingCart = (state:any, action:any) => {
    if(state === undefined){
        return {
            cartItems: [],
            orderTotal: 0,
            cartQty: 0
        }
    }
    switch(action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);
        case 'BOOK_ON_DECREASE':
            return updateOrder(state, action.payload, -1);
        case 'BOOK_ON_DELETE':
            const item = state.shoppingCart.cartItems.find(({id}:any) => id === action.payload);
            return updateOrder(state, action.payload, -item.count);   
        default:
            return state.shoppingCart
    }
}

export default updateShoppingCart;