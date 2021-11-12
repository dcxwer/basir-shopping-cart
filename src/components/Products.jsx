import React, { Component } from 'react'
import './Products.css'
import {currency} from '../utils'
import {Link} from 'react-router-dom'

export default class Products extends Component {

    render() {
        return (
            <div>
                <div className="products">

                    {this.props.products.map(product => (

                        <Link to={'/products/' + product._id} key={product._id} className="product">

                            <img src={product.image} alt={product.title} />

                            <p className="description">{product.title}</p>

                            <div className="product-price">
                                <div>{`${currency(product.price)}`}</div>
                                <button className="button primary">Add to Cart</button>
                            </div>

                        </Link>
                    ))}

                </div>
            </div>
        )
    }
}
