import * as React from 'react';
import './Transititions.css'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
//import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

import Stepper from "../../components/Stepper/Stepper";

const icon = (
  <Paper className='box'  elevation={4}>
    <Stepper />
  </Paper>
);

export default function SimpleSlide() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box >
      <Box>
        <IconButton className='IconButton' onClick={() => handleChange()}>
            <AddIcon className='button'/> Adicionar
        </IconButton>
          
        
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          {icon}
        </Slide>
      </Box>
    </Box>
  );
}
