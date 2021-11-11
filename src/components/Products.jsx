import React, { Component } from 'react'
import './Products.css'
import {currency} from '../utils'

export default class Products extends Component {

    render() {
        return (
            <div>
                <div className="products">

                    {this.props.products.map(product => (

                        <article key={product._id} className="product">

                            <a href={'#' + product._id}>
                                <img src={product.image} alt={product.title} />
                                <p>{product.title}</p>
                            </a>
                            
                            <div className="product-price">
                                <div>{`${currency(product.price)}`}</div>
                                <button className="button primary">Add to Cart</button>
                            </div>

                        </article>
                    ))}

                </div>
            </div>
        )
    }
}
