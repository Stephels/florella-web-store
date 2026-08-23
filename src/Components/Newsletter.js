import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../Styles/newsletter.css";

const Newsletter = () => {
  const [submitted, setSubmitted] = useState(false);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  return (
    <section id="newsletter-section" className="newsletter-section">
      <div className="newsletter-content">
        <div className="newsletter-image">
          <img
            src={require("../Images/Flower Arrangement 1.jpg")}
            alt="Subscribe to Newsletter"
          />
        </div>
        <div className="newsletter-form">
          <h2>
            Join our<br></br>mailing list
          </h2>
          <p>To hear about new releases, specials and upcoming events.</p>
          <Formik
            initialValues={{ firstName: "", lastName: "", email: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              setSubmitted(true);
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form className="signup-form">
                <div className="form-group">
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="form-group">
                  <Field type="text" name="lastName" placeholder="Last Name" />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="form-group">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="register-btn"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
          {submitted && (
            <div className="success-message">
              Thank you for signing up for our newsletter!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
