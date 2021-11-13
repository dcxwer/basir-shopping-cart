import React, { Component } from 'react'
import './Products.css'
import {currency} from '../utils'
import {Link} from 'react-router-dom'

import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Modal from 'react-modal'

export default class Products extends Component {

    constructor(props){
        super(props)

        this.state = {
            // showProductModal: false,
            product: null
        }
    }

    openModal = (product) => {

        this.setState({product})        
    }

    closeModal = () => {

        this.setState({product: null})        
    }

    render() {
        return (
            <div>
                <Fade bottom cascade>
                    <div className="products">

                        {this.props.products.map(product => (


                            <a onClick={() => this.openModal(product)} key={product._id} className="product">

                                <img src={product.image} alt={product.title} />

                                <p className="description">{product.title}</p>

                                <div className="product-price">
                                    <div>{`${currency(product.price)}`}</div>
                                    <button onClick={e => this.props.addToCart(product)} className="button primary">Add to Cart</button>
                                </div>

                            </a>
                        ))}

                    </div>
                </Fade>



               {/* Modal Dialog to show product details */}
               {this.state.product && 
                <Modal isOpen={this.state.product} onRequestClose={this.closeModal} >
                <Zoom>

                <button onClick={this.closeModal} className="btn-close">x</button>

                    <div className="modal">
                        
                        <div className="img-container">
                            <img src={this.state.product?.image} alt="" />
                        </div>  

                        <div className="info">

                            <p className="description">
                                <strong>{this.state.product?.description}</strong>
                            </p>

                        
                            <p className="sizes">
                                Available Sizes:
                                {this.state.product?.availableSizes.map(size => (
                                    <span>{' '} <button>{size}</button></span>
                                ))}
                            </p>

                            <div className="price">{currency(this.state.product.price)}</div>

                            <button onClick={e => { 
                                
                                this.closeModal(); 
                                this.props.addToCart(this.state.product); 
                            
                            }} className="button primary">Add to Cart</button>

                        </div>

                        </div>

                    

                </Zoom>
                </Modal>
                }


               



            </div>
        )
    }
}
