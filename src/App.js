import React from 'react';
import './App.css';

let timeMillisecond = 38740873;
let hours = timeMillisecond/(1000*3600);
let minutes = (timeMillisecond/(1000*60))%60;
let seconds = (timeMillisecond/1000)%60;

function Hour() {
  return (
    <div className="time">
      <h1>{hours.toFixed()}:</h1>
      <p>Hour</p>
    </div>
  );
}

function Minute() {
  return (
    <div className="time">
      <h1>{minutes.toFixed()}:</h1>
      <p>Minute</p>
    </div>
  );
}

function Second() {
  return (
    <div className="time">
      <h1>{seconds.toFixed()}</h1>
      <p>Second</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Hour/>
      <Minute/>
      <Second/>
    </div>
  );
}

export default App;
