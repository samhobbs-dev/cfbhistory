import React from 'react';
import './App.css';
import ConfGrid from './component/ConfGrid';
import TeamSchedule from './component/TeamSchedule';

function App() {
  let year: number = 2002;
  return (
    <div className="App">
      <header className="App-header">
        <ConfGrid year={year}/>
      </header> 
    </div>
  );
}

export default App;
