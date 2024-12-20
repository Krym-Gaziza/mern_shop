import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import AboutUs from './components/AboutUs'; // AboutUs component import

const App = () => {
  return (
    <Router>
      <Header />
      <main className='main-content'>
        <Routes>
          {/* Full-screen pages */}
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />

          {/* About Us page without a container */}
          <Route path='/about-us' element={<AboutUs />} />

          {/* Pages within a container */}
          <Route
            path='/profile'
            element={
              <Container>
                <ProfileScreen />
              </Container>
            }
          />
          <Route
            path='/product/:id'
            element={
              <Container>
                <ProductScreen />
              </Container>
            }
          />
          <Route
            path='/cart/:id'
            element={
              <Container>
                <CartScreen />
              </Container>
            }
          />
          <Route
            path='/cart'
            element={
              <Container>
                <CartScreen />
              </Container>
            }
          />
          <Route
            path='/login/shipping'
            element={
              <Container>
                <ShippingScreen />
              </Container>
            }
          />
          <Route
            path='/payment'
            element={
              <Container>
                <PaymentScreen />
              </Container>
            }
          />
          <Route
            path='/placeorder'
            element={
              <Container>
                <PlaceOrderScreen />
              </Container>
            }
          />
          <Route
            path='/order/:id'
            element={
              <Container>
                <OrderScreen />
              </Container>
            }
          />
          <Route
            path='/admin/userList'
            element={
              <Container>
                <UserListScreen />
              </Container>
            }
          />
          <Route
            path='/admin/user/:id/edit'
            element={
              <Container>
                <UserEditScreen />
              </Container>
            }
          />
          <Route
            path='/admin/productList'
            element={
              <Container>
                <ProductListScreen />
              </Container>
            }
          />
          <Route
            path='/admin/productList/:pageNumber'
            element={
              <Container>
                <ProductListScreen />
              </Container>
            }
          />
          <Route
            path='/admin/product/:id/edit'
            element={
              <Container>
                <ProductEditScreen />
              </Container>
            }
          />
          <Route
            path='/admin/orderList'
            element={
              <Container>
                <OrderListScreen />
              </Container>
            }
          />
          <Route
            path='/search/:keyword'
            element={
              <Container>
                <HomeScreen />
              </Container>
            }
          />
          <Route
            path='/page/:pageNumber'
            element={
              <Container>
                <HomeScreen />
              </Container>
            }
          />
          <Route
            path='/search/:keyword/page/:pageNumber'
            element={
              <Container>
                <HomeScreen />
              </Container>
            }
          />
          <Route
            path='/'
            element={
              <Container>
                <HomeScreen />
              </Container>
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
