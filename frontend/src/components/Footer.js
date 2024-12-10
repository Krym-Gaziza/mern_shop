import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '20px 0', borderTop: '1px solid #ddd' }}>
      <Container>
        <Row className='align-items-center'>
          <Col md={6} className='py-3'>
            <p style={{ fontSize: '14px', color: '#6c757d', textAlign: 'justify' }}>
              Narxoz University offers a wide range of programs and an online store for students. The university also offers various products and services for students, including an online store where they can purchase textbooks, university-branded merchandise, and other essential study materials.
            </p>
            <div className='social-icons' style={{ fontSize: '24px', marginTop: '10px' }}>
              <a href='https://www.facebook.com/narxoz.official.guk/?locale=ru_RU' target='_blank' rel='noopener noreferrer' style={{ margin: '0 10px', color: '#3b5998' }}>
                <FaFacebook />
              </a>
              <a href='https://www.instagram.com/narxozkz/' target='_blank' rel='noopener noreferrer' style={{ margin: '0 10px', color: '#E1306C' }}>
                <FaInstagram />
              </a>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' style={{ margin: '0 10px', color: '#1DA1F2' }}>
                <FaTwitter />
              </a>
            </div>
          </Col>
          <Col md={6} className='py-3'>
            <iframe
              title='Narxoz University Location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.762922118184!2d76.86870497601649!3d43.214461671126266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883685804a93795%3A0x38849e5598fa1531!2z0J3QsNGA0YXQvtC3!5e0!3m2!1sru!2skz!4v1733806233757!5m2!1sru!2skz'
              width='100%'
              height='250'
              style={{ border: '0', borderRadius: '8px' }}
              allowFullScreen=''
              loading='lazy'
            ></iframe>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-2'>
            <p style={{ margin: 0, fontWeight: 'bold', fontSize: '14px' }}>
              Copyright &copy; Narxoz
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
