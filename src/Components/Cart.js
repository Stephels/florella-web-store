// cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  resetCart,
  setShippingMethod,
} from "../Redux/cartSlice";
import "../Styles/cart.css";
import Help from "./Help"; // Import the Help component here

const Cart = () => {
  const { items, totalAmount, shippingMethod, shippingCost } = useSelector(
    (state) => state.cart,
  );
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id, quantity: 1 }));
  };

  const handleAddItem = (id, type, price) => {
    dispatch(addItem({ id, type, price }));
  };

  const handleReset = () => {
    dispatch(resetCart());
  };

  const handleShippingChange = (e) => {
    const selectedMethod = e.target.value;
    let cost = 0;
    if (selectedMethod === "Standard Shipping") {
      cost = 30.0;
    } else if (selectedMethod === "Express Shipping") {
      cost = 70.0;
    }
    dispatch(setShippingMethod({ method: selectedMethod, cost }));
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-page">
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div className="cart-item" key={`${item.id}-${item.type}`}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <p>{item.name}</p>
                    <p>Type: {item.type}</p>
                    <p>
                      R{item.price.toFixed(2)} x {item.quantity}
                    </p>
                    <button onClick={() => handleRemoveItem(item.id)}>
                      Remove
                    </button>
                    <button
                      onClick={() =>
                        handleAddItem(item.id, item.type, item.price)
                      }
                    >
                      +1
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Order Summary</h3>
              <p>Subtotal: R{totalAmount.toFixed(2)}</p>
              <p>
                Shipping Method:
                <select value={shippingMethod} onChange={handleShippingChange}>
                  <option value="Standard Shipping">Standard Shipping</option>
                  <option value="Express Shipping">Express Shipping</option>
                </select>
              </p>
              <Help /> {/* Include the Help component here */}
              <p>Shipping Cost: R{shippingCost.toFixed(2)}</p>
              <p>
                <strong>
                  Total: R{(totalAmount + shippingCost).toFixed(2)}
                </strong>
              </p>
              <button onClick={handleReset}>Reset Cart</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
