import React from "react";
import Form from "react-bootstrap/Form";
const Input = (props) => {
  return <Form.Control type={props.type} placeholder={props.placeholder} />;
};

export default Input;
