import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

const RegisterScreen = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault() // Prevent the page from refreshing after submission
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password))
    }
  }

  return (
    <FormContainer>
      <h1 className="text-center mb-4">Sign Up</h1>

      {/* Show message if passwords don't match */}
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}

      <Card className="shadow-lg rounded-4 p-4">
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {/* Name field */}
            <Form.Group controlId='name' className="mb-4">
              <Form.Label className="fs-5 text-secondary">Full Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your full name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-3 border-0 shadow-sm p-3"
              />
            </Form.Group>

            {/* Email field */}
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

            {/* Password field */}
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

            {/* Confirm password field */}
            <Form.Group controlId='confirmPassword' className="mb-4">
              <Form.Label className="fs-5 text-secondary">Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm your password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="rounded-3 border-0 shadow-sm p-3"
              />
            </Form.Group>

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
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>

      {/* Link to Login if already have account */}
      <Row className='py-3'>
        <Col className="text-center">
          Already have an account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'} className="text-decoration-none">
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
              Login
            </Button>
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
