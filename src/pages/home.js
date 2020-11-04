import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { FaAtlas } from "react-icons/fa";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("กรุณากรอกชื่อ"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("กรุณากรอกนามสกุล"),
  email: Yup.string().email("Invalid email").required("กรุณากรอกอีเมล์"),
});

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: SignupSchema,
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div className="wit">
        <h1>
          <FaAtlas />
          Add Book
        </h1>
        <hr></hr>
        <div className="pannal">
          <div className="mt-10p">
            <label htmlFor="firstName">
              <b>First Name </b>
            </label>
            <input
              className="form-add focus-form"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="กรุณากรอกชื่อ"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && (
              <div className="color-err ">{formik.errors.firstName}</div>
            )}
          </div>
          <div className="mt-10p">
            <label htmlFor="lastName">
              <b>LastName</b>
            </label>
            <input
              className="form-add focus-form"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="กรุณากรอกนามสกุล"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && (
              <div className="color-err">{formik.errors.lastName}</div>
            )}
          </div>
          <div className="mt-10p">
            <label htmlFor="email">
              <b>Email Address</b>
            </label>
            <input
              className="form-add focus-form"
              id="email"
              name="email"
              type="email"
              placeholder="กรุณากรอกอีเมล์"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && (
              <div className="color-err">{formik.errors.email}</div>
            )}
          </div>
          <div className="mt-10p">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default SignupForm;
