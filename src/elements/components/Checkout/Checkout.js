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
            "Unsupported phone number format"
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
      <div className="checkout_form">
        <Form>
          <h2>Personal information</h2>
          <Field name="name" placeholder="Name" type="text" />
          <ErrorMessage name="name" component="h5" />
          <Field name="surname" placeholder="Surname" type="text" />
          <ErrorMessage name="surname" component="h5" />
          <h2>Contact details</h2>
          <Field name="email" placeholder="Email" type="text" />
          <ErrorMessage name="email" component="h5" />
          <Field name="phone" placeholder="+380-XX-XXX-XX-XX" type="text" />
          <ErrorMessage name="phone" component="h5" />
          <h2>Shipping details</h2>
          <Field name="city" placeholder="City" type="text" />
          <ErrorMessage name="city" component="h5" />
          <Field name="address" placeholder="Address" type="text" />
          <ErrorMessage name="address" component="h5" />
          <p>If you order you agree with our terms and conditions</p>
          <Field name="terms" placeholder="terms" type="checkbox" />
          <ErrorMessage name="terms" component="h5" />
          <Link to="/cart" className="back_catalog">
          <button className="button">Return</button>
            </Link>
          <button type="submit">Submit</button>
        </Form>
      </div>
    </Formik>
  );
};

export default Checkout;