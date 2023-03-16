import React from 'react';
import './App.css';
import SchedulePage from './page/SchedulePage';
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Navigate to="year/2022"/>
              }
            />
            <Route
              path="year/:year"
              element={
                <SchedulePage/>
              }
            />
          </Routes>
        </BrowserRouter>
      </header> 
    </div>
  );
}

export default App;
