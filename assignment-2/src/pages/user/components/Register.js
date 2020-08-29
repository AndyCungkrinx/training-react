import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../action";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardHeader,
} from "mdbreact";

const Register = ({ setOpen }) => {
    const dispatch = useDispatch();
    const RegisterSchemaValidation = Yup.object().shape({
        fullname: Yup.string()
          .min(5, 'Fullname to short')
          .max(50, 'Fullname to long')
          .required('Fullname required'),
        email: Yup.string()
          .email("Wrong Format")
          .required('Email required'),
        telepon: Yup.number()
          .min(12,'Phone Number to short')
          .required('Phone required'),
        password: Yup.string()
          .min(6, 'Minimal 6 character')
          .required('Password required')
    });
    const formRegister = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            telepon: '',
            password: '',
        },
        validationSchema: RegisterSchemaValidation,
        onSubmit: (values) => {
            dispatch(register(values))
        },
    })
  return (
    <MDBContainer className="page-account">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Register:
                </h3>
              </MDBCardHeader>
              <form onSubmit={formRegister.handleSubmit}>
                <div className="form-outline">
                  <input
                  type="fullname"
                  name="fullname"
                  className="form-control"
                  placeholder="Input your full name"
                  onChange={formRegister.handleChange}
                  value={formRegister.values.fullname}
                  />
                  {
                   (formRegister.touched.fullname && formRegister.errors.fullname ) && (<span className="badge bg-warning">{formRegister.errors.fullname}</span>)
                  }
                </div>
                <div className="form-outline">
                  <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Input your email"
                  onChange={formRegister.handleChange}
                  value={formRegister.values.email}
                  />
                  {
                    formRegister.errors.email && (<span className="badge bg-warning">{formRegister.errors.email}</span>)
                  }
                </div>
                <div className="form-outline">
                  <input
                  type="telepon"
                  name="telepon"
                  className="form-control"
                  placeholder="Input your phone number"
                  onChange={formRegister.handleChange}
                  value={formRegister.values.telepon}
                  />
                  {
                    formRegister.errors.telepon && (<span className="badge bg-warning">{formRegister.errors.telepon}</span>)
                  }
                </div>
                <div className="form-outline">
                  <input
                  type="password"
                  name="password"
                  placeholder="Input your password"
                  className="form-control"
                  onChange={formRegister.handleChange}
                  value={formRegister.values.password}
                  />
                  {
                    formRegister.errors.password && (<span className="badge bg-warning">{formRegister.errors.password}</span>)
                  }
                </div>
              <div className="text-center mt-4">
                <button type="submit" className="btn btn-outline-success">Register</button>
              </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Register;