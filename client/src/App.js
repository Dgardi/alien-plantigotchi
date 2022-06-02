import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* <Route
            exact
            path="/home"
            render={() =>
              loggedIn ? <Redirect to="/" /> : <MainPage />
            }
          /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
