import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => { 
  const navigate = useNavigate();

  return (
    <Formik
      onSubmit={({ email, password }) => {
        localStorage.setItem(email, password);
        navigate("/");
        alert(JSON.stringify(email, password, null, 2));
      }}
      initialValues={{
        username: "",
        email: "",
        password: "",
        passwordRepeat: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .min(3, "Username must be more then 3 characters")
          .max(20, "Username must be shorter then 20 characters")
          .required("Name is required"),
        email: Yup.string()
          .email("Enter a valid email address")
          .max(255)
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Must be at least 6 characters")
          .required("Required"),
        passwordRepeat: Yup.string().required("Required"),
      })}
    >
      <Form>
        <h2>Personal information</h2>
        <Field
          className="input"
          name="username"
          placeholder="Username"
          type="text"
        />
        <Field className="input" name="email" placeholder="Email" type="text" />
        <Field
          className="input"
          name="password"
          placeholder="Password"
          type="text"
        />
        <Field
          className="input"
          name="passwordRepeat"
          placeholder="Repeat password"
          type="text"
        />
        <p>Already a member?</p>
        <Link to="/login">
          <button className="">Log In</button>
        </Link>
        <button className="button" type="submit">
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default SignUp;
