import './Cart.css'
import React, { Component } from 'react'
import CartItem from './CartItem'
import { currency } from '../utils'

export default class Cart extends Component {

    render() {

        const {cartItems} = this.props 

        return (
            <div>
            
                <div className="cart-header">
                    {cartItems.length === 0 && <div>Cart is empty</div>}
                    {cartItems.length > 0 && <div>You have {cartItems.length} in cart</div>}
                </div>

                <ul className="cart">
                    {cartItems.map(item => (

                        <CartItem key={item._id} item={item} removeFromCart={this.props.removeFromCart}/>
                    
                    ))}
                </ul>

                {cartItems.length > 0 && (<>
                    <div className="total">
                        Total: {currency(cartItems.reduce((a, c) => a + c.price * c.count, 0))}
                    </div>
                
                    <button className="btn-checkout">Checkout</button>
                </>)}

            </div>
        )
    }
}
