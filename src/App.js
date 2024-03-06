import Navbar from "./components/NavBar/Navbar";
import { Routes , Route } from "react-router";
import './App.css';
import Home from "./components/LandingPage/Home"
import WishList from "./pages/WishLIstItem/WishList";
import Cart from "./pages/Cart/Cart"
import Product from "./components/ProductCart/Product";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="wishlist" element={<WishList/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="product" element={<Product/>}/>

        {/* //Dynamic route in _Id */}
       { /*<Route path="product/:product_Id" element={<ProductDetails/>}/>*/}
      </Routes>
      <Footer/>
     </div>
    </div>
  );
}

export default App;
