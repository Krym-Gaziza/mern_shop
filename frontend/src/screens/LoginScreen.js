import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { login } from '../actions/userActions';
import './LoginScreen.css';

const LoginScreen = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="login-page-wrapper">
      <Card className="custom-login-box">
        <h1 className="custom-login-title">LOGIN</h1>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email" className="custom-form-group">
            <Form.Label className="custom-label">Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="email@email.com"
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

          <Button type="submit" className="custom-login-button">
            SIGN IN
          </Button>
        </Form>

        <div className="custom-register-link">
          New Customer?{' '}
          <Link
            to={redirect ? `/register?redirect=${redirect}` : '/register'}
            className="custom-register-button-link"
          >
            <Button variant="outline-primary" size="sm" className="custom-register-button">
              REGISTER
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default LoginScreen;
