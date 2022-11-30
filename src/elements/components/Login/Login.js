import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Formik
      onSubmit={({ email, password }) => {
        let correctPassword = localStorage.getItem(email);
        if (password === correctPassword) {
            localStorage.setItem('loggedUser', email)
            window.open('/', '_self');
          } else {
            alert("Email or password is incorrect");
          }
      }}
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Enter a valid email address")
          .max(255)
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Must be at least 6 characters")
          .required("Required"),
      })}
    >
      <Form>
        <Field className="input" name="email" placeholder="Email" type="text" />
        <Field
          className="input"
          name="password"
          placeholder="Password"
          type="text"
        />
        <p>Not a member?</p>
        <Link to="/signUp">
          <button className="">Sign Up</button>
        </Link>
        <button className="button" type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default Login;
