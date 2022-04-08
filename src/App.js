import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DetailsProduct, Home, Login, Products } from './pages'
import Navbar from './components/Navbar';


function App() {
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
