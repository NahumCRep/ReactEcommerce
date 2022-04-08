import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Payment } from './pages'
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
