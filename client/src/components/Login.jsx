import React, { useState ,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import { useUserAuth } from "../context/UserAuthContext";
import { TransactionContext } from "../context/TransactionContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const { logIn, googleSignIn } = TransactionContext();
  const navigate = useNavigate();
  const { logIn, googleSignIn } = useContext(TransactionContext);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="logincontainer">
        <h2 className="tit"> Login</h2>
        {error && <Alert variant="danger" className="errorMsg">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
            className="inp"
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
            className="inp"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="btncontainer">
            <Button className="btn" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        {/* <hr /> */}
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
        <div className="p-4 box mt-3 text-center text-white">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
      </div>
      
    </>
  );
};

export default Login;