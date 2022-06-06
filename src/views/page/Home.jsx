import React from "react";
import "./estilo.css";

import {Link} from 'react-router-dom'

//import Stepper from "../../components/Stepper/Stepper";

import Capa from "./Capa/Capa";

const Home = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>Capa</h1>
      </div>
      <button>
        <Link to="/crudcapa">
          Criar Fmea
        </Link>
      </button>
      <Capa />
    </div>
  );
};

export default Home;
