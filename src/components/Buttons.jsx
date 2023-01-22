import React from 'react'
import Button from 'react-bootstrap/Button';
const Buttons = (props) => {
  console.log(props)
  return (
    <Button variant={props.variant}>{props.value}</Button>
  )
}

export default Buttons
