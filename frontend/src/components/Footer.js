import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Narxoz University offers a wide range of programs and an online store for students.The university also offers various products and services for students, including an online store where they can purchase textbooks, university-branded merchandise, and other essential study materials. 
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; Narxoz
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

