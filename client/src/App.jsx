import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeCategory from "./pages/HomeCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./components/Footer/Footer";
import mens_banner from "./assets/banner_mens.png";
import women_banner from "./assets/banner_women.png";
import kid_banner from "./assets/banner_kids.png";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/casuais' element={<HomeCategory banner={mens_banner} category="men"/>}/>
          <Route path='/termicas' element={<HomeCategory banner={women_banner} category="women"/>}/>
          <Route path='/kids' element={<HomeCategory banner={kid_banner} category="kid"/>}/>
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />}/>
          </Route>
          <Route path='/carrinho' element={<Cart />}/>
          <Route path='/login' element={<LoginSignup />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
