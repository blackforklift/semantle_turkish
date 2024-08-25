import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Padding } from "@mui/icons-material";

const DataTable = ({ guessedWord }) => {
  const [data, setData] = useState([]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    // Update data state when guessedWord changes
    if (guessedWord) {
      setData((prevData) => [...prevData, guessedWord]);
    }
  }, [guessedWord]);

  const cellStyle = {
    maxWidth: isSmallScreen ? "100px" : "none",
    whiteSpace: isSmallScreen ? "normal" : "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",

  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: "50px",
        marginLeft: "20px",
        maxWidth: "60%",
        overflowX: "hidden", // Hide horizontal scrollbar
      }}
    >
      <Table
        sx={{
          minWidth: "450px",
          tableLayout: "fixed", //  table layout shouldn't exceed container width
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Tahmin</TableCell>
            <TableCell>Benzerlik</TableCell>
            <TableCell>Yakınlık</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell sx={cellStyle}>{row}</TableCell>
              <TableCell sx={cellStyle}></TableCell>
              <TableCell sx={cellStyle}></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
