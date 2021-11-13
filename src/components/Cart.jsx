import './Cart.css'
import React, { Component } from 'react'
import CartItems from './CartItems'
import { currency } from '../utils'


export default class Cart extends Component {

    constructor(props){
        super(props)

        this.state = {
            showCheckout: false,
            email: '',
            name: '',
            address: '',
        }
    }

    handleInputChange = (e) => {

        this.setState({ [e.target.name]: e.target.value })
    }

    createOrder = (e) => {
        e.preventDefault()

        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,     
            cartItems: this.props.cartItems       
        }

        this.props.createOrder(order)
    }

    render() {

        const {cartItems} = this.props 

        return (
            <div>
            
                <div className="cart-header">
                    {cartItems.length === 0 && <div>Cart is empty</div>}
                    {cartItems.length > 0 && <div>You have {cartItems.length} in cart</div>}
                </div>

          

                <CartItems cartItems={cartItems} removeFromCart={this.props.removeFromCart}/>
                

                {cartItems.length > 0 && (<>
                    <div className="total">
                        Total: {currency(cartItems.reduce((a, c) => a + c.price * c.count, 0))}
                    </div>
                
                    <button onClick={() => this.setState({showCheckout: true})} className="btn-checkout">Proceed</button>
                </>)}

                {this.state.showCheckout && (

                    <form onSubmit={this.createOrder} className="checkout-form">

                        <ul className="container">

                            <li className="form-group">
                                <label htmlFor="email">Email</label>
                                <input onChange={this.handleInputChange} type="text" className="form-control" id="email" name="email" placeholder="Email"/>
                            </li>                        

                             <li className="form-group">
                                <label htmlFor="name">Name</label>
                                <input onChange={this.handleInputChange} type="text" className="form-control" id="name" name="name"  placeholder="Name"/>
                            </li>                   

                             <li className="form-group">
                                <label htmlFor="address">Address</label>
                                <input onChange={this.handleInputChange} type="text" className="form-control" id="address" name="address"  placeholder="Address"/>
                            </li>                        

                            <li>
                                <button className="btn-submit" type="submit">Checkout</button>
                            </li>

                        </ul>

                    </form>
                )}

            </div>
        )
    }
}
