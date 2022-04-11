import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DetailsProduct, Home, Login, Products } from './pages'
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { validate } from './features/user/userSlice';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(validate())
  },[])
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<DetailsProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
