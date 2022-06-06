import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./Content.css";

import About from "../../views/page/About";
import Home from "../../views/page/Home";
import Revisao from "../../views/page/revisao/Revisao";
import Fmea from "../../views/page/fmea/Fmea";
import CrudCapa from "../../views/page/CRUD/CrudCapa";
import CrudCapaSeg from "../../views/page/CRUD/CrudCapaSeg";
import CrudFmea from "../../views/page/CRUD/CrudFmea";

const Content = () => (
  <main className="Content">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/revisao" element={<Revisao />} />
        <Route path="/fmea" element={<Fmea />} />
        <Route path="/crudcapa" element={<CrudCapa />} />
        <Route path="/crudcapaSeg" element={<CrudCapaSeg />} />
        <Route path="/crudfmea" element={<CrudFmea />} />
        
      </Routes>
  </main>
);

export default Content;
