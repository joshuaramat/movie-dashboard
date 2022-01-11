import React, {useState} from 'react';
import { Container, FormGroup } from 'reactstrap';
import api from '../services/api'
import (button, form, FormGroup, Label )

export default function Login({ history }){
const [ email, setEmail]= useState("")
const [ password, setPassword] = useState("")

const handleSubmit = async evt =>{
    evt.preventDefault();
    console.log('result of the submit', email, password)

    const response = await api.post('/login', {email, password})
    const userId = response.data._id || false;

    if(userId) {
        localStorage.setItem('user', userId)
        history.push('/dashboard')
    
    } 
    else {
        const { message } = response.data
        console.log(message)
    }
}
    return(
        <Container>
            <h2>Login</h2>
            <p>Please <strong>Login</strong> into your account</p>
        <Form OnSubmit={handleSubmit}>
  <FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2"
      for="exampleEmail"
    >
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="Your Email"
      onChange={evt => setEmail(evt.target.value)} 
      type="email"
    />
  </FormGroup>
  <FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2"
      for="examplePassword"
    >
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="Your Password"
      onChange={evt => setPassword(evt.target.value)} 
      type="password"
    />
  </FormGroup>
  <Button>
    Submit
  </Button>
</Form>
</Container>
    )}