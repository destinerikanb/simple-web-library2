import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./Login.css";

const LoginFormik = ({ bloc }) => {
  let { handlelogin } = bloc();
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("This field should not be empty"),
      password: Yup.string().min(6, "6 min length character"),
    }),
    onSubmit: () => {
      console.log(formik.values);
      if (
        formik.values.email === "admin@example.com" &&
        formik.values.password === "12345678"
      ) {
        handlelogin(formik.values);
        nav("/protected");
      } else {
        alert("Incorrect email or password! ");
      }
    },
  });

  return (
    <div className="login main">
      <form onSubmit={formik.handleSubmit}>
        <div className="d-flex flex-column login container">
          <div className="d-flex align-items-center login containerCenter">
            <div className="d-flex justify-content-end login containerEnd">
              <div className="card w-50 login backgroundColorCard">
                <div className="card-body">
                  <h2 className="login">
                    <i className="fas fa-unlock-alt"></i> Login Page
                  </h2>
                  <br />
                  <div>
                    <div className={`form-group`}>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="usernameHelp"
                        placeholder="Enter email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        name="email"
                      />
                      {formik.errors.email && formik.touched.email && (
                        <small className="text-danger">
                          {formik.errors.email}
                        </small>
                      )}
                    </div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      aria-describedby="usernameHelp"
                      placeholder="Enter password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      name="password"
                    />
                    {formik.errors.password && formik.touched.password && (
                      <small className="text-danger">
                        {formik.errors.password}
                      </small>
                    )}
                  </div>
                  <br></br>
                  <div>
                    <button
                      type=" submit"
                      className={`btn btn-primary login inputButtonawesome-button-sm`}
                    >
                      <i className="fas fa-sign-in"></i> Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginFormik;
