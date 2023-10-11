import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Content from "./Components/content/Content";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>
    </div>
  );
};

export default App;
