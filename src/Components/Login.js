import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../Styles/login.css";
import showIcon from "../Images/Icons/show.png";
import hideIcon from "../Images/Icons/hide.png";
// The Login component handles user login. It includes a form with validation, error handling, and navigation to the homepage upon successful login.
const Login = () => {
  const dispatch = useDispatch(); // Hook from react-redux to dispatch actions to the Redux store, specifically for logging in a user.
  const navigate = useNavigate(); // Hook from react-router-dom to programmatically navigate to different routes, specifically to redirect the user to the homepage after successful login.
  const [showPassword, setShowPassword] = useState(false); // State to toggle the visibility of the password field (show/hide password)
  const [focusedField, setFocusedField] = useState(null); // State to track which input field is currently focused, used to change the placeholder text dynamically based on focus.
  const currentUser = useSelector((state) => state.user.currentUser); //  Selector to get the current logged-in user from the Redux store. If a user is logged in, this will contain their username; otherwise, it will be null.
  const error = useSelector((state) => state.user.error); // Selector to get any error message related to login from the Redux store. This is used to display error messages when login fails (e.g., wrong username or password).

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required."),
    password: Yup.string().required("Password is required."),
  });

  const handleLoginSubmit = (values, { setSubmitting }) => {
    dispatch(logIn(values));
    setSubmitting(false);
  };

  // Clear any existing error messages when the component unmounts (e.g., when navigating away from the Login page). This prevents old error messages from persisting when the user returns to the Login page later.
  useEffect(() => {
    return () => {
      dispatch({ type: "user/resetError" });
    };
  }, [dispatch]);

  // currentUser only gets set once login actually succeeds, so this sends the user to the homepage right after that happens.
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return (
    <div className="login-page">
      <h2>Welcome back</h2>
      <div className="login-container">
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleLoginSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-group">
                <Field
                  type="text"
                  name="username"
                  placeholder={
                    focusedField === "username"
                      ? "e.g. Bullfeathers_11"
                      : "Username"
                  }
                  onFocus={() => setFocusedField("username")}
                  onBlur={() => setFocusedField(null)}
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form-group" style={{ position: "relative" }}>
                <div
                  className="password-field"
                  style={{ position: "relative" }}
                >
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder={
                      focusedField === "password"
                        ? "e.g. p@ssWord!"
                        : "Password"
                    }
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField(null)}
                  />
                  <img
                    src={showPassword ? hideIcon : showIcon}
                    alt={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((prev) => !prev)}
                    style={{
                      position: "absolute",
                      right: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>
              {error && <div className="error-message">{error}</div>}
              <button
                type="submit"
                disabled={isSubmitting}
                className="login-btn"
              >
                Log In
              </button>
            </Form>
          )}
        </Formik>
        <p className="switch-link">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
