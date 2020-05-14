import React, { Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter'


class App extends React.Component {
  
  timerStopped(stopTime){
    alert(`The counter1 is at ${stopTime}` ) 
  }
  
  render(){
      return(
          <Fragment>
            <Counter startTime={10} interval={1000} timerStopped={this.timerStopped}/>
            <Counter startTime={1} interval={500} timerStopped={this.timerStopped}/>
            <Counter startTime={5} interval={2000} timerStopped={this.timerStopped}/>
          </Fragment>
          ); 
  }
 
}

export default App;
