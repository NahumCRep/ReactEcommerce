import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DetailsProduct, Home, Login, Products, Payment, Cart, Done } from './pages'
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { validate } from './features/user/userSlice';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(validate())
  // },[])
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<DetailsProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/payment/done' element={<Done />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
