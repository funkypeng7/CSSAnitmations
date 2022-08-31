import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/0_Home/Home.component";
import FirstButton from "./routes/1_Transitions/FirstButton.component";
import Transforms from "./routes/2_Transforms/Transforms.component";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="1" element={<FirstButton />} />
      <Route path="2" element={<Transforms />} />
    </Routes>
  );
}

export default App;
