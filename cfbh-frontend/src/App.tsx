import React from 'react';
import './App.css';
import SchedulePage from './page/SchedulePage';
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
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
        <Footer/>
      </header> 
    </div>
  );
}

export default App;
