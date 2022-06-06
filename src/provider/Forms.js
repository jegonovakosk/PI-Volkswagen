import React, { useEffect, useState} from "react";
import axios from 'axios';

export const FormsContext = React.createContext();

export const FormsProvider = (props) => {

  const URL = 'http://localhost:3000/fmea'
  const [apiRows, setApiRows] = useState([])
  const [rows, setRows] = useState([
    createData(
      "Montar vedação de teto solar - Temperatura  (> 18°C)",
      "Temperatura da borracha do teto fora da especificação",
      "Descolamento da vedação",
      5,
      "Freqüência de monitoramento da temperatura inadequada"
    ),
    createData(
      "Roletar vedação com força mínima de 50N",
      "Pressão menor que 50N",
      "Descolamento da vedação",
      7,
      "Freqüência de monitoramento da temperatura inadequada"
    ),
  ]);
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const AdicionarArray= todo => {
    console.log(todo)
    const add = {
      name:todo.name,
      calories: todo.calories,
      fat: todo.fat,
      carbs:todo.carbs,
      protein:todo.protein
    }
    setRows([...rows, add]);
  }

  useEffect(() =>{
    axios.get(URL)
    .then(res => {
      setApiRows(res.data)
    })
    console.log(rows)
  }, [rows])

  return (
      <FormsContext.Provider value={{rows, AdicionarArray}}>
      {props.children}
    </FormsContext.Provider>
  );
};
