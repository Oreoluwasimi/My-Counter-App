import "./App.css";
import React from "react";
import Counter from "./Components/Counter";
import NotFound from "./Components/NotFound";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./Components/ErrorBoundary";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     
    </div>
  );
}

export default App;
