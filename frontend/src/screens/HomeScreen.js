import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProduct } from '../actions/productActions'

const HomeScreen = () => {
  const params = useParams()
  const dispatch = useDispatch()

  const keyword = params.keyword
  const pageNumber = params.pageNumber || 1

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProduct(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      {/* Carousel for home screen */}
      {!keyword && <ProductCarousel />}

      {/* Go Back button if there's a keyword in the URL */}
      {keyword && (
        <Link to='/' className='btn btn-light mb-4'>
          <i className="fas fa-arrow-left"></i> Go Back
        </Link>
      )}

      {/* Main heading */}
      <h1 className="text-center my-4 text-primary">Latest Products</h1>

      {/* Loading, Error, and Products Display */}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Container>
          <Row>
            {products.map((product) => (
              <Col
                key={product._id}
                sm={12}
                md={6}
                lg={4}
                xl={3}
                className="mb-4"
              >
                <Product product={product} />
              </Col>
            ))}
          </Row>
          {/* Pagination Component */}
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </Container>
      )}
    </>
  )
}

export default HomeScreen

