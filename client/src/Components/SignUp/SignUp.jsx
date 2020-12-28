import React, { useRef,useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
import axios from "axios";
import { store } from 'react-notifications-component';
function SignUp(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const cnfPasswordRef = useRef();
  const nameRef = useRef();
  const [userType,setUserType] = useState('');
  const [loading,setLoading] = useState(false);
  const history = useHistory();


// notification object
const notification = {
  title: "server says!",
  message: "Configurable",
  type: "success",
  insert: "top",
  container: "top-right",
  dismiss: {
    duration: 2000
  }
  };

  // handle usertype
  function handleUserType(value){
    setUserType(value);
  }

  // handle submit
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // console.log(emailRef.current.value)
    // console.log(passwordRef.current.value)
    // console.log(cnfPasswordRef.current.value)
    // console.log(userType.current.value)


    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirm_password: cnfPasswordRef.current.value,
      userType
    };




    axios
      .post("/sign-up", data)
      .then((res) => {store.addNotification({
        ...notification,
        message:res.data.message
      })
      history.push('/') })
      .catch((err) => console.log(err));

  setLoading(false);

  }

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "4%" }}>
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <h2 className="text-center">SignUp</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                ref={nameRef}
                placeholder="Enter name"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="password"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                ref={cnfPasswordRef}
                placeholder="confirm-password"
                required
              />
            </Form.Group>
            <Form.Group>
              <Row>
                <Col>You are a :</Col>
                <Col>
                  <Col>
                    <Form.Control
                    onClick = {()=>handleUserType('teacher')}
                    value = "teacher"
                      type="radio"
                      name="type-of-user"
                      required
                    ></Form.Control>
                  </Col>
                  <Col>Teacher</Col>
                </Col>
                <Col>
                  <Form.Control onClick = {()=>handleUserType('student')} value = "student"  type="radio" name="type-of-user" required></Form.Control>
                  Student
                </Col>
              </Row>
            </Form.Group>

            <Button type="submit" className="w-100" disabled={loading}>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
        <div className="text-center mb-2">
          Already Registered?<Link to="/">singIn</Link>{" "}
        </div>
      </Card>
    </div>
  );
}

export default SignUp;
