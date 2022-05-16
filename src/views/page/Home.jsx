import React from "react";
import "./estilo.css";

//import Stepper from "../../components/Stepper/Stepper";
import Table from "../../components/table/Table";
import Transititions from "../../components/transitions/Transititions";

const Home = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>Cadastro FMEA</h1>
      </div>
      <div className="Home">
        {/* <Stepper /> */}
        <Transititions/>
      </div>
      <div className="table">
        <Table />
      </div>
    </div>
  );
};

export default Home;
