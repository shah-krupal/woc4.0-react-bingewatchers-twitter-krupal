/*import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from 'react';


const Login = () => {
    const [username, setusername] = useState("") ; 
    const [password, setpassword] = useState("") ;


    function handleSubmit(event){
        event.preventDefault() ;
    }

    return (
        <div className='login'>
            <Form onsubmit={handleSubmit}>
                <Form.Group size = "lg" controlId = "username">
                    <Form.Label>username</Form.Label>
                    <Form.Control
                        autoFocus
                        type = "username"
                        value = {username}
                        onChange = {(e) => setusername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size = "lg" controlId = "password">
                    <Form.Label>password</Form.Label>
                    <Form.control
                        type = "password"
                        value = {password}
                        onChange = {(e) => setpassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size = "lg" type = "submit" >
                    "Login"
                </Button>

            </Form>
        </div>
    );
}

export default Login
*/

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Routes, Route, Link, useRoutes } from 'react-router-dom';
import { Row, Col, Container } from "react-bootstrap";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const styling = {
      fontFamily: "Cursive",
      color: "red",
      backgroundColor: "lightBlue",
      display: "flex",
      width:300,
  };

  const headStyle = {
      fontFamily:"Arial",
      fontSize:"larger",
      color: "Green",
      padding:5,
      fontWeight: "bold",
      border: 2
  };

  const BtnStyle = {
      border:20,
      color:"yellow",
      backgroundColor:"red",
      padding:7
  }

  

  return (
    <div className = 'Login'>
      <Container>
        <Row>
          <Col>
      <Form onSubmit={handleSubmit} style={{ 
        backgroundImage: `url("https://image.shutterstock.com/image-vector/online-movie-booking-app-tiny-600w-1173257971.jpg")`, 
      }}>
        <Form.Group size="sm={8}" controlId="email"  >
          <Form.Label style = {headStyle}>E-mail:</Form.Label>
          <Form.Control
            style={styling}
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="sm={8}" controlId="password">
          <Form.Label style = {headStyle}>Password:</Form.Label>
          <Form.Control
          style={styling}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="sm={8}" type="submit" disabled={!validateForm()} style = {BtnStyle}>
          Login
        </Button>
      </Form>
      </Col>
      <Col>
        <Button>
          MEE
        </Button>
      </Col>
      </Row>
      </Container>
    </div>
  );
}