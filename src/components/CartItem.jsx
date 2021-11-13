import { currency } from '../utils'

const CartItem = ({item, removeFromCart}) => {

    const {image, title} = item

    return (
        <li className="cart-item">
                                
            <div>
                <img src={image} alt={title} />
            </div>

            <div className="right">
                <div>{title}</div>
                <div className="info">
                    <span>{`${currency(item.price)} x ${item.count} `}</span>
                    <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
            </div>


        </li>
    )
    }
export default CartItem
