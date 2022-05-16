import React, { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import TextField from "@mui/material/TextField";
import "./Stepper.css";
import Button from "@mui/material/Button";

const steps = ["Primera parte", "Segunda Parte", "Finalizar e Criar"];

const campos = (valor) => {
  switch (valor) {
    case 0:
      return (
        <Fragment>
          <div className="Stepper">
            <TextField
              className="text"
              id="standard-textarea"
              label="Função do processo/produto"
              placeholder="Placeholder"
              multiline
              variant="standard"
            />
            <TextField
              className="text"
              id="standard-textarea"
              label="Modo/tipo de falha potencial"
              placeholder="Placeholder"
              multiline
              variant="standard"
            />
          </div>
          <div className="Stepper">
            <TextField
              className="text"
              id="standard-textarea"
              label="Efeito potencial da falha"
              placeholder="Placeholder"
              multiline
              variant="standard"
            />
            <TextField
              className="text"
              id="standard-textarea"
              label="Classificação"
              placeholder="Placeholder"
              multiline
              variant="standard"
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
              id="standard-textarea"
              label=""
              placeholder="Placeholder"
              multiline
              variant="standard"
            />
            <TextField
              className="text"
              id="standard-textarea"
              label=""
              placeholder="Placeholder"
              multiline
              variant="standard"
            />
          </div>
          <div className="Stepper">
            <TextField
              className="text"
              id="standard-textarea"
              label=""
              placeholder="Placeholder"
              multiline
              variant="standard"
            />
            <TextField
              className="text"
              id="standard-textarea"
              label=""
              placeholder="Placeholder"
              multiline
              variant="standard"
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
              id="standard-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              variant="standard"
            />
            <TextField
              className="text"
              id="standard-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              variant="standard"
            />
          </div>
          <div className="Stepper">
            <TextField
              className="text"
              id="standard-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              variant="standard"
            />
            <TextField
              className="text"
              id="standard-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              variant="standard"
            />
          </div>
        </Fragment>
      );
    default:
      return;
  }
};

export default function HorizontalLabelPositionBelowStepper() {
  const [valor, setValor] = useState(0);

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
            variant="contained"
          >Salvar</Button>
        )}
      </Box>
    </>
  );
}
