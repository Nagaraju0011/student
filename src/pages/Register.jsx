import React from 'react'
import Form from 'react-bootstrap/Form';
import Input from '../components/Input';
import Buttons from '../components/Buttons';

const Register = () => {
  return (
    <Form>
      <h3>Register Page</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Input type="email"/>
      </Form.Group>    
      <Buttons variant="primary" type="submit" value="Submit" />
  </Form>
  )
}

export default Register
