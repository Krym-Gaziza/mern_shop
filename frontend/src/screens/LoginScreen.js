import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

const LoginScreen = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h1 className="text-center mb-4">Sign In</h1>

      {/* Card Styling and Spacing */}
      <Card className="shadow-lg rounded-4 p-4">
        <Card.Body>
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader />}
          
          {/* Login Form */}
          <Form onSubmit={submitHandler}>
            {/* Email Field */}
            <Form.Group controlId='email' className="mb-4">
              <Form.Label className="fs-5 text-secondary">Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-3 border-0 shadow-sm p-3"
              />
            </Form.Group>

            {/* Password Field */}
            <Form.Group controlId='password' className="mb-4">
              <Form.Label className="fs-5 text-secondary">Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-3 border-0 shadow-sm p-3"
              />
            </Form.Group>

            {/* Sign In Button */}
            <Button
              className="w-100 py-3 my-3 rounded-3"
              type='submit'
              variant='primary'
              style={{
                backgroundColor: '#5c6bc0', // Soft blue color
                border: 'none',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              Sign In
            </Button>
          </Form>
        </Card.Body>
      </Card>

      {/* Register Link */}
      <Row className='py-3'>
        <Col className="text-center">
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'} className="text-decoration-none">
            <Button
              variant="outline-primary"
              size="sm"
              className="rounded-pill"
              style={{
                borderColor: '#5c6bc0',
                color: '#5c6bc0',
                padding: '6px 20px',
              }}
            >
              Register
            </Button>
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
