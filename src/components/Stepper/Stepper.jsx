import React, { Fragment, useState, useContext } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import TextField from "@mui/material/TextField";
import "./Stepper.css";
import Button from "@mui/material/Button";
import { FormsContext } from '../../provider/Forms'


const steps = ["Primera parte", "Segunda Parte", "Finalizar e Criar"];


export default function HorizontalLabelPositionBelowStepper() {
  const [valor, setValor] = useState(0);
  const addForms = useContext(FormsContext)
  const [todo, setTodo] = useState({
      name:'',
      calories: '',
      fat: '',
      carbs:'',
      protein:''
  });

  const valorTodo = (e) =>{
    const auxValor = {...todo}
    auxValor[e.target.name] =  e.target.value
    setTodo(auxValor)
  }
  
  const campos = (valor) => {
    switch (valor) {
      case 0:
        return (
          <Fragment>
            <div className="Stepper">
              <TextField
                className="text"
                name="name"
                id="standard-textarea"
                label="Função do processo/produto"
                placeholder="Placeholder"
                multiline
                value={todo.name}
                variant="standard"
                onChange={valorTodo}
              />
              <TextField
                className="text"
                name="calories"
                id="standard-textarea"
                label="Modo/tipo de falha potencial"
                placeholder="Placeholder"
                multiline
                variant="standard"
                onChange={valorTodo}
              />
            </div>
            <div className="Stepper">
              <TextField
                className="text"
                name="fat"
                id="standard-textarea"
                label="Efeito potencial da falha"
                placeholder="Placeholder"
                multiline
                variant="standard"
                onChange={valorTodo}
              />
              <TextField
                className="text"
                name="carbs"
                id="standard-textarea"
                label="Classificação"
                placeholder="Placeholder"
                multiline
                variant="standard"
                onChange={valorTodo}
              />
            </div>
          </Fragment>
        );
      case 1:
        return (
          <Fragment>
            <div className="Stepper">
              <TextField
                className="text"              
                label=""
                value=''
                placeholder="Placeholder"
                multiline
                variant="standard"
                onChange={(e) => setTodo({name: e.target.value})}
              />
              <TextField
                className="text"                
                label=""
                value=''
                placeholder="Placeholder"
                multiline
                variant="standard"
                onChange={(e) => setTodo({name: e.target.value})}
              />
            </div>
            <div className="Stepper">
              <TextField
                className="text"                
                label=""
                value=''
                placeholder="Placeholder"
                multiline
                variant="standard"
                onChange={(e) => setTodo({name: e.target.value})}
              />
              <TextField
                className="text"                
                label=""
                value=''
                placeholder="Placeholder"
                multiline
                variant="standard"
                onChange={(e) => setTodo({name: e.target.value})}
              />
            </div>
          </Fragment>
        );
      case 2:
        return (
          <Fragment>
            <div className="Stepper">
              <TextField
                className="text"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
                variant="standard"
                onChange={(e) => setTodo({name: e.target.value})}
              />
              <TextField
                className="text"               
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
                variant="standard"
                onChange={(e) => setTodo({name: e.target.value})}
              />
            </div>
            <div className="Stepper">
              <TextField
                className="text"                
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
                variant="standard"
                onChange={(e) => setTodo({name: e.target.value})}
              />
              <TextField
                className="text"                
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
                variant="standard"
                onChange={(e) => setTodo({name: e.target.value})}
              />
            </div>
          </Fragment>
        );
      default:
        return;
    }
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={valor} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {campos(valor)}
      </Box>
      <Box className="Button">
        <Button
          onClick={() => setValor(valor === 0 ? 0 : valor - 1)}
          variant="contained"
        >
          Voltar
        </Button>
        {valor !== 3 ? (
          <Button
            onClick={() => setValor(valor === 3 ? 3 : valor + 1)}
            variant="contained"
          >Proximo</Button>
        ) : (
          <Button
          onClick={() => addForms.AdicionarArray(todo)}
            variant="contained"
          >Salvar</Button>
        )}
      </Box>
    </>
  );
}
