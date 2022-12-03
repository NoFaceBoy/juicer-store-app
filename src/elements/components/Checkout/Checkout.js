import "./Checkout.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  return (
    <Formik
      onSubmit={(values) => {
        navigate("/cart/checkout/success");
        alert(JSON.stringify(values, null, 2));
      }}
      initialValues={{
        name: "",
        surname: "",
        email: "",
        phone: "",
        city: "",
        address: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Please don't exceed 15 characters")
          .matches(/^[a-zA-Z]*$/, "Letters are only allowed")
          .required("Name is required"),
        surname: Yup.string()
          .max(15, "Please don't exceed 15 characters")
          .matches(/^[a-zA-Z]*$/, "Letters are only allowed")
          .required("Surname is required"),
        email: Yup.string()
          .email("Enter a valid email address")
          .max(255)
          .required("Email is required"),
        phone: Yup.string()
          .trim()
          .matches(
            /^\+?3?8?(0[\s\.-]\d{2}[\s\.-]\d{3}[\s\.-]\d{2}[\s\.-]\d{2})$/,
            "Example:+380-XX-XXX-XX-XX"
          ),
        city: Yup.string()
          .min(3, "Minimum of 3 characters")
          .max(30, "Please don't exceed 30 characters")
          .matches(/^[a-zA-Z]*$/, "Letters are only allowed")
          .required("City is required"),
        address: Yup.string()
          .min(3, "Minimum of 3 characters")
          .max(50, "Please don't exceed 50 characters")
          .matches(/^[a-zA-Z]*$/, "Letters are only allowed")
          .required("Address is required"),
        terms: Yup.boolean()
          .oneOf([true], "You must accept the terms first!")
          .required(),
      })}
    >
      <section className="checkout_form">
        <Form>
          <div className="personal">
            <h2>Personal information</h2>
            <Field
              className="input"
              name="name"
              placeholder="Name"
              type="text"
            />
            <Field
              className="input"
              name="surname"
              placeholder="Surname"
              type="text"
            />
            <div className="errors">
              <ErrorMessage className="error" name="name" component="h5" />
              <ErrorMessage className="error" name="surname" component="h5" />
            </div>
          </div>
          <div className="contact">
            <h2>Contact details</h2>
            <Field
              className="input"
              name="email"
              placeholder="Email"
              type="text"
            />
            <Field
              className="input"
              name="phone"
              placeholder="Phone (optional)"
              type="text"
            />
            <div className="errors">
              <ErrorMessage name="email" component="h5" />
              <ErrorMessage name="phone" component="h5" />
            </div>
          </div>
          <div className="shipping">
            <h2>Shipping details</h2>
            <Field
              className="input"
              name="city"
              placeholder="City"
              type="text"
            />
            <Field
              className="input"
              name="address"
              placeholder="Address"
              type="text"
            />
            <div className="errors">
              <ErrorMessage name="city" component="h5" />
              <ErrorMessage name="address" component="h5" />
            </div>
          </div>
          <Field name="terms" placeholder="terms" type="checkbox" />
          <span>I confirm that I have acknowledged all terms.</span>
          <div className="errors">
            <ErrorMessage className="error" name="terms" component="h5" />
          </div>
          <Link to="/cart" className="back_catalog">
            <button className="button">Return</button>
          </Link>
          <button className="button" type="submit">
            Submit
          </button>
        </Form>
      </section>
    </Formik>
  );
};

export default Checkout;
