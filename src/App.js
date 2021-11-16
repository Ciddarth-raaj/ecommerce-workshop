import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

//npm i react-router
//npm i react-router-dom

import Home from "./Pages/Home"
import Product from './Pages/Product';

function Router() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:name" element={<Product />} />
    </Routes>
  </BrowserRouter>
}

export default Router;
