import React from "react";
import "./App.css";

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";
import { FormsProvider } from "../provider/Forms";
import 'bootstrap/dist/css/bootstrap.min.css'
import { CrudProvider } from "../provider/CrudFmea";
import { BrowserRouter } from "react-router-dom";
const App = (props) => {
  return (
    <>
      <div className="App">
        <FormsProvider>
          <CrudProvider>
            <BrowserRouter>
                <Menu />
                <Content />

            </BrowserRouter>

          </CrudProvider>
        </FormsProvider>
      </div>
    </>
  );
};

export default App;
