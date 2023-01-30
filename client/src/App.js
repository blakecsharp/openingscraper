import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";

import theme from "./style/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import GetOpenings from "./components/GetOpenings/GetOpenings";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/openings" element={<GetOpenings />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
