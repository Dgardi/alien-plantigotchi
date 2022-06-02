import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
