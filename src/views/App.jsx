import React from "react";
import "./App.css";

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";
import { FormsProvider } from "../provider/Forms";
const App = (props) => {
  return (
    <>
      <div className="App">
        <FormsProvider>
          <Menu />
          <Content />
        </FormsProvider>
      </div>
    </>
  );
};

export default App;
