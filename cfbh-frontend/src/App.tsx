import React from 'react';
import logo from './logo.svg';
import './App.css';
import RecordService from './api/recordService';
import { RecordTeam } from './type/recordTeam';

function App() {
  let testImageBlob: Blob = new Blob();
  RecordService.getAllConferenceStandings(2022).then(data => console.log(data));
  RecordService.getTeamAndLogoByYear(251,2022).then(data => {
    console.log(data)
    testImageBlob = (data as RecordTeam).logo;
  });
  let testImage: string = URL.createObjectURL(testImageBlob);
  console.log(testImage);
  console.log(logo);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
    </div>
  );
}

export default App;
