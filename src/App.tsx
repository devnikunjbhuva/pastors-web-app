// App
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PastorsLine from "./main-component";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PastorsLine />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
