import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { register } from '../actions/userActions';
import './RegisterScreen.css';

const RegisterScreen = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <div className="register-page-wrapper">
      <Card className="custom-register-box">
        <h1 className="custom-register-title">Sign Up</h1>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name" className="custom-form-group">
            <Form.Label className="custom-label">Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="custom-input"
            />
          </Form.Group>

          <Form.Group controlId="email" className="custom-form-group">
            <Form.Label className="custom-label">Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="custom-input"
            />
          </Form.Group>

          <Form.Group controlId="password" className="custom-form-group">
            <Form.Label className="custom-label">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="custom-input"
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword" className="custom-form-group">
            <Form.Label className="custom-label">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="custom-input"
            />
          </Form.Group>

          <Button type="submit" className="custom-register-button">
            Register
          </Button>
        </Form>

        <div className="custom-login-link">
          Already have an account?{' '}
          <Link
            to={redirect ? `/login?redirect=${redirect}` : '/login'}
            className="custom-login-button-link"
          >
            <Button variant="outline-primary" size="sm" className="custom-login-button">
              Login
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default RegisterScreen;
