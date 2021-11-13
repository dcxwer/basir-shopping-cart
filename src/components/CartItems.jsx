import { currency } from '../utils'

import Fade from 'react-reveal/Fade'



const CartItems = ({cartItems, removeFromCart}) => {

   
    return (

        <Fade left cascade>

        <ul className="cart">

            {cartItems.map(item => (
                
                <li key={item._id} className="cart-item">
                                        
                    <div>
                        <img src={item.image} alt={item.title} />
                    </div>

                    <div className="right">
                        <div>{item.title}</div>
                        <div className="info">
                            <span>{`${currency(item.price)} x ${item.count} `}</span>
                            <button onClick={() => removeFromCart(item)}>Remove</button>
                        </div>
                    </div>

                </li>

            ))}
        </ul>

        </Fade>
    )
}

export default CartItems
