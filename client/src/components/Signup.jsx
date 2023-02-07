
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import './signup.css'
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { TransactionContext } from "../context/TransactionContext";

const Signup = () => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useContext(TransactionContext);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
  
   <>
      <div className="logincontainer">
        <h2 className="tit"> Signup</h2>
        {/* {error && <Alert variant="danger">{error}</Alert>} */}
        <Form onSubmit={handleSubmit}>
          <Form.Group  controlId="formBasicEmail">
            <Form.Control
             className="inp"
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
              
              <br/>
          <Form.Group  controlId="formBasicPassword">
            <Form.Control
            className="inp"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="btncontainer">
            <Button className="btn" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
        {error && <Alert variant="danger" className="errorMsg">{error}</Alert>}
        <div className="p-4 box mt-3 text-center text-white">
        Already have an account? <Link to="/">Log In</Link>
      </div>
      </div>
    
    </>
  );
};

export default Signup;

