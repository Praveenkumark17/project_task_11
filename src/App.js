import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/home';
import Product from './Components/Products/product';
import Cart from './Components/Cart/cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='products' element={<Product/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
