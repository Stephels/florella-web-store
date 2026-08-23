import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../Redux/userSlice";
import "../Styles/header.css";
import logo from "../Images/Logo/Florella-white.png";
import { ReactComponent as CartIcon } from "../Images/Icons/cart-shopping-light-full.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const username = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleLogout = () => {
    dispatch(logOut());
  };

  // Calculate total quantity of items in the cart
  const totalCartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-logo">
        <Link to="/" className="brand-logo">
          <img src={logo} alt="Florella Logo" className="header-logo-img" />
        </Link>
      </div>

      <nav className="header-nav">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
        <Link className="nav-link" to="/products">
          Store
        </Link>
        <Link className="nav-link cart-link" to="/cart">
          <CartIcon className="cart-icon" />
          {totalCartQuantity > 0 && (
            <span className="cart-count">({totalCartQuantity})</span>
          )}
        </Link>
      </nav>

      <div className="header-user">
        {username ? (
          <>
            <p>
              Welcome, <strong>{username}</strong>
            </p>
            <button className="logout-btn" onClick={handleLogout}>
              Log Out
            </button>
          </>
        ) : (
          <div className="auth-links">
            <Link className="login-link" to="/login">
              Log In
            </Link>
            <Link className="register-link" to="/register">
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
