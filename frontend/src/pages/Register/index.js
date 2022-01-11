import React, {useState} from 'react';
import { FormGroup } from 'reactstrap';
import api from '../services/api'
import (button, form, FormGroup, Label )

export default function Register({ history }){
const [ email, setEmail]= useState("")
const [ password, setPassword] = useState("")
const [ firstName, setFirstName] = useState ("")
const [ lastName, setLastName] = useState("")


const handleSubmit = async evt =>{
    evt.preventDefault();
    console.log('result of the submit', { email, password, firstName, lastName})

    const response = await api.post('/user/register', {email, password})
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
        <p>Please <strong>Register</strong> for a new account</p>
        <Form>
          <FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2"
      for="exampleEmail"
    >
      First Name
    </Label>
    <Input
      id="firstName"
      name="firstName"
      placeholder="firstName"
      onChange={evt => setFirstName(evt.target.value)} 
      type="text"
    />
  </FormGroup><FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2"
      for="exampleEmail"
    >
      Last Name
    </Label>
    <Input
      id="lastname"
      name="lastname"
      placeholder="lastname"
      onChange={evt => setLastName(evt.target.value)} 
      type="text"
    />
  </FormGroup> 
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