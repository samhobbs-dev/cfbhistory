import React from 'react';
import './App.css';
import SchedulePage from './page/SchedulePage';

function App() {
  let year: number = 2007;
  return (
    <div className="App">
      <header className="App-header">
        <SchedulePage year={year}/>
      </header> 
    </div>
  );
}

export default App;
