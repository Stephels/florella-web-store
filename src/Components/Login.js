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

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null); // Track focused field
  const currentUser = useSelector((state) => state.user.currentUser);
  const error = useSelector((state) => state.user.error);

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required."),
    password: Yup.string().required("Password is required."),
  });

  const handleLoginSubmit = (values, { setSubmitting }) => {
    dispatch(logIn(values));
    setSubmitting(false);
  };

  // Clear the error message when the component is first rendered
  useEffect(() => {
    return () => {
      dispatch({ type: "user/resetError" });
    };
  }, [dispatch]);

  // Use effect to redirect when the currentUser state changes
  useEffect(() => {
    if (currentUser) {
      navigate("/"); // Redirect to the landing page
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
