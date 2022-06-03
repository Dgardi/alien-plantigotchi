import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

// State that holds current user data we want to be accessable to all children
import UserProvider from './utils/UserContext'

import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";




function App() {
  return (
    <div>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<MainPage />} />
            {/* <Route
              exact
              path="/home"
              render={() =>
                loggedIn ? <Redirect to="/" /> : <MainPage />
              }
            /> */}
          </Routes>
        </Router>
      </UserProvider> 
    </div>
  );
}

export default App;
