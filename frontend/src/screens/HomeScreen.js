
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import CategoryFilter from '../components/CategoryFilter' 
import { listProduct } from '../actions/productActions'

const HomeScreen = () => {
  const [categories, setCategories] = useState([]) 
  const params = useParams()
  const dispatch = useDispatch()

  const keyword = params.keyword
  const pageNumber = params.pageNumber || 1

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('/api/products/categories')
      const data = await response.json()
      setCategories(data)
    }
    fetchCategories()
    dispatch(listProduct(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      {!keyword && <ProductCarousel />}
      {keyword && (
        <Link to='/' className='btn btn-light mb-4'>
          <i className="fas fa-arrow-left"></i> Go Back
        </Link>
      )}
<h1 className="text-center my-4" style={{ color: '#ff5733' }}>
  Latest Products
</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={3}>
            <CategoryFilter categories={categories} /> {}
          </Col>
          <Col md={9}>
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
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ''}
            />
          </Col>
        </Row>
      )}
    </>
  )
}

export default HomeScreen
