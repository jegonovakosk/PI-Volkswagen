import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./Content.css";

import About from "../../views/page/About";
import Home from "../../views/page/Home";

const Content = () => (
  <main className="Content">
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  </main>
);

export default Content;
