import React from 'react';
import './App.css';



function convertFromMilliseconds(milliseconds){
  let hours = milliseconds/(1000*3600);
  let minutes = (milliseconds/(1000*60))%60;
  let seconds = (milliseconds/1000)%60;
  return{
    hours : hours<10 ? `0${parseInt(hours)}`:parseInt(hours),
    minutes : minutes<10 ? `0${parseInt(minutes)}`:parseInt(minutes),
    seconds : seconds<10 ? `0${parseInt(seconds)}`:parseInt(seconds)
  }
}




function Hour(props) {
  return (
    <div className="time">
      <h1>{props.time.hours}:</h1>
      <p>Hour</p>
    </div>
  );
}

function Minute(props) {
  return (
    <div className="time">
      <h1>{props.time.minutes}:</h1>
      <p>Minute</p>
    </div>
  );
}

function Second(props) {
  return (
    <div className="time">
      <h1>{props.time.seconds}</h1>
      <p>Second</p>
    </div>
  );
}



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      pending : false,
      timeMilliseconds : 38768668,
      time : convertFromMilliseconds(38768668)
    };
  }

  handleStartClick = (event)=>{
    if(this.state.pending){
      clearInterval(this.intervalId);
      this.setState( {pending : !this.state.pending});
    }else{
      this.setState({pending : !this.state.pending});
      this.intervalId = setInterval(()=>{
          this.setState({
            timeMilliseconds : this.state.timeMilliseconds+1000,
            time : convertFromMilliseconds(this.state.timeMilliseconds+1000)})  
        },
        1000
      )
    }
    
  }

  handleResetClick = (event)=>{
      clearInterval(this.intervalId);   
      this.setState({
          pending : false,
          timeMilliseconds : 0,
          time : convertFromMilliseconds(0)
      });

    
  }


  render(){
    return (
      <div className="App">
        <div className="d-flex">
          <Hour time={this.state.time}/>
          <Minute time={this.state.time}/>
          <Second time={this.state.time}/>
        </div>
        <div className="man-buttons">
          <button onClick={this.handleStartClick}>{this.state.pending ? 'Stop' : 'Start'}</button>
          <button onClick={this.handleResetClick}>Reset</button>
        </div>
      </div>
    );  
  }
  
}

export default App;
