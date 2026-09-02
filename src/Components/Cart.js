import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  resetCart,
  setShippingMethod,
} from "../Redux/cartSlice";
import "../Styles/cart.css";
import Help from "./Help";

// This component displays the shopping cart page. It shows the items in the cart, allows users to add or remove items, select a shipping method, and view the order summary including subtotal, shipping cost, and total amount. Users can also reset the cart to remove all items.
const Cart = () => {
  const { items, totalAmount, shippingMethod, shippingCost } = useSelector(
    (state) => state.cart,
  );
  // Get the dispatch function from Redux to dispatch actions to the store
  const dispatch = useDispatch();
  // Function to handle removing an item from the cart. It dispatches the removeItem action with the item's id, type, and quantity to remove one unit of that item from the cart.
  const handleRemoveItem = (id, type) => {
    dispatch(removeItem({ id, type, quantity: 1 }));
  };
  // Function to handle adding an item to the cart. It dispatches the addItem action with the item's id, type, and price.
  const handleAddItem = (id, type, price) => {
    dispatch(addItem({ id, type, price }));
  };
  // Function to handle resetting the cart. It dispatches the resetCart action to remove all items from the cart.
  const handleReset = () => {
    dispatch(resetCart());
  };
  //  Function to handle changing the shipping method. It updates the shipping method and cost in the Redux store based on the selected option from the dropdown menu.
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
                    <button
                      onClick={() => handleRemoveItem(item.id, item.type)}
                    >
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
              <Help />
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
