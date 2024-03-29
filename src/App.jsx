import React from "reactn";
import { BrowserRouter } from "react-router-dom";
import { ScrollTop } from "./ScrollTop";
import { Routes } from "./routes";
import './index.css'

const App = (props) => {
  return (
    <BrowserRouter>
      <ScrollTop>
        <Routes {...props} />
      </ScrollTop>
    </BrowserRouter>
  );
};

export default App;
