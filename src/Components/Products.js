import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/cartSlice";
import { productData } from "../Data/productsData";
import Footer from "./Footer";
import "../Styles/products.css";
import waveTop from "../Images/wave-top.svg";

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState({});
  const [showCartButton, setShowCartButton] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleTypeChange = (productId, type) => {
    setSelectedType((prevState) => ({
      ...prevState,
      [productId]: type,
    }));
  };

  const handleAddToCart = (product) => {
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        type: selectedType[product.id] || "Select Type",
      }),
    );
    setShowCartButton(true); // Show the button after adding to cart
    setTimeout(() => setShowCartButton(false), 5000); // Hide after 5 seconds
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  const blooms = productData.filter(
    (product) =>
      product.name.toLowerCase().includes("flower") ||
      product.name.toLowerCase().includes("arrangement") ||
      product.name.toLowerCase().includes("bunch") ||
      product.name.toLowerCase().includes("alter") ||
      product.name.toLowerCase().includes("ceiling") ||
      product.name.toLowerCase().includes("wild") ||
      product.name.toLowerCase().includes("wedding") ||
      product.name.toLowerCase().includes("tablescapes") ||
      product.name.toLowerCase().includes("display") ||
      product.name.toLowerCase().includes("lapel") ||
      product.name.toLowerCase().includes("aisle") ||
      product.name.toLowerCase().includes("bouquet"),
  );

  const bakes = productData.filter(
    (product) =>
      product.name.toLowerCase().includes("cake") ||
      product.name.toLowerCase().includes("macaroons") ||
      product.name.toLowerCase().includes("cupcakes"),
  );

  return (
    <div
      className={`products-page ${showCartButton ? "show-cart-button" : ""}`}
    >
      <section className="products-parallax">
        <div className="parallax-content">
          <h1>Products</h1>
        </div>
        <div className="wave-container">
          <svg
            width="1920"
            height="480"
            xmlns="http://www.w3.org/2000/svg"
            className="wave-svg"
          >
            <path
              d="M0,320 Q320,200 640,320 T1280,320 T1920,320 V1080 H0 Z"
              fill="#e3d2f1"
            />
          </svg>
        </div>
      </section>
      <section id="blooms-section" className="blooms-section">
        <div className="blooms-content">
          <h2>Blooms</h2>
          <p>Discover our floral arrangements</p>
        </div>
        <div className="product-grid blooms">
          {blooms.length > 0 ? (
            blooms.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div className="product-card-content">
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">
                    From: R{product.price.toFixed(2)}
                  </p>
                </div>
                <div className="btns-container">
                  <div className="type-dropdown-container">
                    <select
                      id={`type-${product.id}`}
                      className="type-dropdown"
                      value={selectedType[product.id] || ""}
                      onChange={(e) =>
                        handleTypeChange(product.id, e.target.value)
                      }
                    >
                      <option value="">Select Type</option>
                      <option value="small bunch">Small Bunch</option>
                      <option value="medium bunch">Medium Bunch</option>
                      <option value="large bunch">Large Bunch</option>
                      <option value="Bridal bunch">Bridal Bunch</option>
                      <option value="Groom lepal">Groom Lepal</option>
                    </select>
                  </div>

                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No blooms available.</p>
          )}
        </div>
      </section>
      <section>
        <div className="wave-section"></div>
      </section>
      <section id="bakes-section" className="bakes-section">
        <div className="bakes-content">
          <h2>Bakes</h2>
          <p>Discover our bakes</p>
        </div>
        <div className="product-grid bakes">
          {bakes.length > 0 ? (
            bakes.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div className="product-card-content">
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">R{product.price.toFixed(2)}</p>
                </div>
                <div className="btns-container">
                  <div className="type-dropdown-container">
                    <select
                      id={`type-${product.id}`}
                      className="type-dropdown"
                      value={selectedType[product.id] || ""}
                      onChange={(e) =>
                        handleTypeChange(product.id, e.target.value)
                      }
                    >
                      <option value="">Select Type</option>
                      <option value="Mini Cake">Mini Cake</option>
                      <option value="Occasion Cake">Occasion Cake</option>
                      <option value="Simple Cake">Simple Cake</option>
                      <option value="Bridal Cake">Bridal Cake</option>
                    </select>
                  </div>

                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No bakes available.</p>
          )}
        </div>
      </section>

      {showCartButton && (
        <button className="go-to-cart-btn" onClick={handleGoToCart}>
          Go to Cart
        </button>
      )}

      <Footer />
    </div>
  );
};

export default Products;
