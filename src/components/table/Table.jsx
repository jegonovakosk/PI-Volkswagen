import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FormsContext } from "../../provider/Forms";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#003087",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const forms = useContext(FormsContext);
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440 , maxWidth: 1050}}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">
              Função do processo/ produto
            </StyledTableCell>
            <StyledTableCell align="center">
              Modo / Tipo de falha potencial
            </StyledTableCell>
            <StyledTableCell align="center">
              Efeito potencial da falha
            </StyledTableCell>
            <StyledTableCell align="center">Classificação</StyledTableCell>
            <StyledTableCell align="center">
              Causa potencial / mecanismos de falha
            </StyledTableCell>
            <StyledTableCell align="center">
            Controle Preventivo
            </StyledTableCell>
            <StyledTableCell align="center">
            Controle Detectivo
            </StyledTableCell>
            <StyledTableCell align="center">
            Severidade
            </StyledTableCell>
            <StyledTableCell align="center">Ocorrência</StyledTableCell>
            <StyledTableCell align="center">
            Detecção
            </StyledTableCell>
            <StyledTableCell align="center">
            NPR
            </StyledTableCell>
            <StyledTableCell align="center">
            Ação recomendada / nome do responsável / data prevista
            </StyledTableCell>
            <StyledTableCell align="center">
            Ocorrência
            </StyledTableCell>
            <StyledTableCell align="center">
            Detecção
            </StyledTableCell>
            <StyledTableCell align="center">
            NPR
            </StyledTableCell>
            <StyledTableCell align="center">
              Ações tomadas/ data efetiva
              </StyledTableCell>
            <StyledTableCell align="center">
            Ocorrência
            </StyledTableCell>
            <StyledTableCell align="center">
            Detecção
            </StyledTableCell>
            <StyledTableCell align="center">
            NPR
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {forms.rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
