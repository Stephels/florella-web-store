import React, { useState } from "react";
import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../Redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/register.css";

import showIcon from "../Images/Icons/show.png";
import hideIcon from "../Images/Icons/hide.png";

// Modal styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "40px",
    borderRadius: "10px",
    border: "none",
    background: "rgba(255, 255, 255, 0.9)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

Modal.setAppElement("#root");

const Register = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const nameValidation = Yup.string()
    .matches(
      /^[A-Z][a-z]*$/,
      "Must start with a capital letter and contain only letters",
    )
    .max(16, "Must be 16 characters or less")
    .required("This field is required.");

  const validationSchema = Yup.object({
    firstName: nameValidation,
    surname: nameValidation,
    username: Yup.string()
      .matches(
        /^[a-zA-Z][a-zA-Z0-9._]{4,19}$/,
        "Username must start with a letter and can include letters, numbers, underscores, and periods. Must be between 5 and 20 characters.",
      )
      .required("Username is required."),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required."),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/\d/, "Password must contain at least one number")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character",
      )
      .required("Password is required."),
  });

  const handleRegisterSubmit = (values) => {
    dispatch(registerUser(values));
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    navigate("/login");
  };

  return (
    <div className="register-page">
      <h2>Create Account</h2>
      <div className="register-container">
        <Formik
          initialValues={{
            firstName: "",
            surname: "",
            username: "",
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleRegisterSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-group">
                <Field type="text" name="firstName" placeholder="First Name" />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form-group">
                <Field type="text" name="surname" placeholder="Last Name" />
                <ErrorMessage
                  name="surname"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form-group">
                <Field type="text" name="username" placeholder="Username" />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form-group">
                <Field type="email" name="email" placeholder="Email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="form-group" style={{ position: "relative" }}>
                <div className="password-wrapper">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                  />
                  <img
                    className="show-hide-icon"
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
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="register-btn"
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
        <p className="switch-link">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>

      {/* Modal for registration success */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Registration Success"
      >
        <h2 style={{ color: "#333", fontSize: "1.5rem", marginBottom: "20px" }}>
          Registration Successful!
        </h2>
        <p style={{ color: "#333", marginBottom: "20px" }}>
          Your account has been created successfully. You can now log in.
        </p>
        <button
          onClick={closeModal}
          style={{
            padding: "12px",
            backgroundColor: "#d4b19a",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "1rem",
            cursor: "pointer",
            textTransform: "uppercase",
            fontWeight: "bold",
            transition: "background-color 0.3s, transform 0.2s",
            width: "100%",
          }}
          className="register-btn"
        >
          Go to Login
        </button>
      </Modal>
    </div>
  );
};

export default Register;
