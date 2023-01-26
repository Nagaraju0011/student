import React from 'react'

import {Form, Container} from 'react-bootstrap';
import Input from '../components/Input';
import Buttons from '../components/SubmitButton';

const Login = () => {
  return (
    <Container>
    <Form>
      <h3>Login Page</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Input type="email"/>
      </Form.Group>    
      <Buttons variant="primary" type="submit" value="Submit" />
  </Form>
  </Container>
  )
}

export default Login
