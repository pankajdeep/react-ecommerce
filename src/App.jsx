import "./App.css";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import Header from "./components/header/Header";
import Product from "./components/product/ProductSection";
import Banner from "./components/banner/Banner";
import Shop from "./screens/shop/Shop";
import ProductDetail from "./screens/productDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Shop /> */}
      <ProductDetail />
      <Footer />
    </div>
  );
}

export default App;
