import React from 'react';

const Cart = ({ cartItems }) => {
    return (
        <div>
            {cartItems.map(item => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                    <button>Remove from Cart</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;