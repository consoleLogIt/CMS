import React, {useRef,useState} from 'react';
import { Card,Form,Button} from 'react-bootstrap';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';


function SignIn(props) {
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();


  // handle Submit
    async function handleSubmit(e) {
      //prevent page from refreshing onSubmit
    e.preventDefault();

    const data = {
      email:emailRef.current.value,
      password:passwordRef.current.value,
    }
  
    axios
    .post("/sign-in",data)
    .then(res => {
      console.log(res);
      history.push("/homepage")
    })
    .catch(err=>console.log(err,"error"))

    }

    return (
            <div className = ""style = {{display:"flex",justifyContent:"center",marginTop:'100px'}} >
             <Card style = {{width:'30rem'}}>
              <Card.Body>
                 <h2 className = "text-center">Sing In</h2>
             
                 <Form onSubmit = {handleSubmit}>
                  <Form.Group controlId="email">
                   <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref = {emailRef} placeholder="Enter email" required />
                  </Form.Group>
                  <Form.Group controlId="password">
                   <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref = {passwordRef}  placeholder="password" required />
                  </Form.Group>
                  <Button type = "submit" className ="w-100">Sign In</Button>
                </Form>
              </Card.Body>
              <div className = "text-center mb-2">New User? <Link to ="signup">SignUp</Link> </div>
             </Card>
           </div>
    );
}

export default SignIn;