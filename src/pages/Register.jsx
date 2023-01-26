import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Register = () => {
  console.log("component rendered");
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { fname, lname, email, password, confirmPassword } = { ...data };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Container>
        <form
          onSubmit={submitHandler}
          className="log-register-form registerForm"
        >
          <div className="row">
            <div className="col-md-12">
              <label>First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="fname"
                value={fname}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lname"
                value={lname}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label>Email</label>
              <input
                type="email"
                placeholder="Last Name"
                name="email"
                value={email}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={changeHandler}
              />
            </div>
          </div>
          <button>Submit</button>
        </form>
        <br></br>
        <br></br>
        <table border="1" cellPadding="15" cellSpacing="15">
          <tbody>
            <tr>
              <td>{fname}</td>
              <td>{lname}</td>
              <td>{email}</td>
              <td>{password}</td>
              <td>{confirmPassword}</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default React.memo(Register);
