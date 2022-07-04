import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ColumnLayout from "./pages/layout/ColumnLayout";
import RequireAuth from "./auth/RequireAuth";
import LoginFormik from "./auth/LoginFormik";
import LoginService from "./auth/service/LoginService";
import LoginBloc from "./auth/bloc/LoginBloc";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            index
            element={<LoginFormik bloc={() => LoginBloc(LoginService)} />}
          />
          <Route
            path="/protected/*"
            element={
              <RequireAuth redirectTo={"/"}>
                <ColumnLayout />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

