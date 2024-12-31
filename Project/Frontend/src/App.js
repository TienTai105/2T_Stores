import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { CartProvider } from './Pages/Cart/CartContext';  // Import CartProvider
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/index'
import About from './Pages/About/index';
import Listing from './Pages/Listing/Listing'
import Footer from './Components/Footer/footer'
import ProductDetail from './Pages/Detail'
import Contact from './Components/Contact/Contact';
import Blog from './Pages/Blog/index'
import Cart from './Pages/Cart/Cart'
import CheckoutPage from './Pages/Checkout/Checkout'
import OrderSuccess from './Pages/OrderSuccess/index'
import Login from './Pages/Login/index';
import Signup from './Pages/Login/Signup';
import NewProducts from './Pages/NewProduct/NewProduct';
import Bestseller from './Pages/BestSeller/BestSeller';
import Basketball from './Pages/Basketball/Basketball';
import Football from './Pages/Football/Football';
import Gym from './Pages/Gym/Gym';
import Running from './Pages/Running/Running';
import Skate from './Pages/Skate/Skate';
import Tennis from './Pages/Tennis/Tennis';
import Yoga from './Pages/Yoga/Yoga';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route exact={true} path='/' element={<Home/>}/>
      <Route exact={true} path='/listing' element={<Listing/>}/>
      <Route exact={true} path='/product/:productId' element={<ProductDetail/>}/>
      <Route exact={true} path='/Blog' element={<Blog/>}/>
      <Route exact={true} path='/About' element={<About/>}/>
      <Route exact={true} path='/Cart' element={<Cart/>}/>
      <Route exact={true} path="/checkout" element={<CheckoutPage />} />
      <Route exact={true} path="/order-success" element={<OrderSuccess />} />
      <Route exact={true} path="/login" element={<Login />} />      
      <Route exact={true} path="/signup" element={<Signup />} />      
      <Route exact={true} path="/newproduct" element={<NewProducts />} />      
      <Route exact={true} path="/bestseller" element={<Bestseller />} />      
      <Route exact={true} path="/basketball" element={<Basketball />} />      
      <Route exact={true} path="/football" element={<Football />} />      
      <Route exact={true} path="/gym" element={<Gym />} />      
      <Route exact={true} path="/running" element={<Running />} />      
      <Route exact={true} path="/skate" element={<Skate />} />      
      <Route exact={true} path="/tennis" element={<Tennis />} />      
      <Route exact={true} path="/yoga" element={<Yoga />} />      
      
    </Routes>
    <Contact/>
    <Footer/>
  </BrowserRouter>
  </CartProvider>
  );
}

export default App;
