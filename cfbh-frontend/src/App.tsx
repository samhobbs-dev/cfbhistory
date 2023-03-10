import React from 'react';
import './App.css';
import ConfGrid from './component/ConfGrid';
import TeamSchedule from './component/TeamSchedule';

function App() {
  let teamId: number = 251;
  let year: number = 1985;
  return (
    <div className="App">
      <header className="App-header">
        <ConfGrid year={year}/>
        <TeamSchedule
          teamId={teamId}
          year={year}
        />
      </header> 
    </div>
  );
}

export default App;
