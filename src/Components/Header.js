import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../Redux/userSlice";
import "../Styles/header.css";
import logo from "../Images/Logo/Florella-white.png";
import { ReactComponent as CartIcon } from "../Images/Icons/cart-shopping-light-full.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // State to track whether the navigation menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);
  // Get the current username from the Redux store to determine if the user is logged in
  const username = useSelector((state) => state.user.currentUser);
  // Get the dispatch function from Redux to dispatch actions to the store
  const dispatch = useDispatch();
  // Get the items in the cart from the Redux store to calculate the total quantity of items
  const cartItems = useSelector((state) => state.cart.items);
  // Function to handle user logout. It dispatches the logOut action to update the Redux store and log the user out.
  const handleLogout = () => {
    dispatch(logOut());
  };
  // Function to close the navigation menu. It sets the menuOpen state to false, which hides the menu.
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Calculate total quantity of items in the cart
  const totalCartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  // Effect to handle scroll events. It adds an event listener to the window that checks the scroll position and updates the isScrolled state accordingly. When the user scrolls down more than 60 pixels, the header will change its appearance (e.g., background color, shadow) to indicate that the page has been scrolled.
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
    <header
      className={`header ${isScrolled ? "scrolled" : ""} ${
        menuOpen ? "menu-open" : ""
      }`}
    >
      <div className="header-logo">
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <img src={logo} alt="Florella Logo" className="header-logo-img" />
        </Link>
      </div>

      {/* Only shows up on small screens -- see header.css media queries */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className="header-nav">
        <Link className="nav-link" to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link className="nav-link" to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link className="nav-link" to="/contact" onClick={closeMenu}>
          Contact
        </Link>
        <Link className="nav-link" to="/products" onClick={closeMenu}>
          Store
        </Link>
        <Link className="nav-link cart-link" to="/cart" onClick={closeMenu}>
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
            <button
              className="logout-btn"
              onClick={() => {
                handleLogout();
                closeMenu();
              }}
            >
              Log Out
            </button>
          </>
        ) : (
          <div className="auth-links">
            <Link className="login-link" to="/login" onClick={closeMenu}>
              Log In
            </Link>
            <Link className="register-link" to="/register" onClick={closeMenu}>
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
