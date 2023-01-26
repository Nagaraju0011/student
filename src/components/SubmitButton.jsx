import React from "react";
import Button from "react-bootstrap/Button";
const Buttons = (props) => {
  return (
    <Button variant={props.variant} size={props.size} href={props.href}>
      {props.value}
    </Button>
  );
};

export default Buttons;
