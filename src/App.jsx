import "./App.css";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import Header from "./components/header/Header";
import Product from "./components/product/Product";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
