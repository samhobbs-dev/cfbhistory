import React from 'react';
import './App.css';
import MyImage from './component/TeamLogo';
import TeamSchedule from './component/TeamSchedule';

function App() {
  let teamId: number = 2;
  let year: number = 1980;
  return (
    <div className="App">
      <header className="App-header">
        <MyImage
          teamId={teamId}
          year={year}
        />
        <TeamSchedule
          teamId={teamId}
          year={year}
        />
      </header> 
    </div>
  );
}

export default App;
