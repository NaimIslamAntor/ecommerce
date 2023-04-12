import './App.css'

import {
  Routes,
  Route,
} from "react-router-dom"

//import components
import Navbar from './components/Navbar';


//import pages
import Home from './pages/Home'
import ProductSingle from './pages/ProductSIngle'
import Cart from './pages/Cart'

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product/:id" element={<ProductSingle/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    </div>
  );
}

export default App;
