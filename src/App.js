import React, { Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import Counter from './component/counter/Counter'
import Calculator from './component/calculator/calculator';
import PersonneList from './component/personneList/personneList';


class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {}
  }

  timerStopped = (stopTime, name) =>{
    this.setState({name: name, stopTime: stopTime},
      ()=>{
        alert(`The ${this.state.name} is at ${this.state.stopTime}` ) 
      });
    
  }
  
  render(){
    const persons = [{id: 1, name: "jp"}, {id: 2, name: "elni"}, {id: 3, name: "spooty"}, {id: 4, name: "gally"},];
      return(
          <Fragment>
            <Counter startTime={10} 
                     interval={1000} 
                     timerStopped={this.timerStopped}
                     name="counter1"/>
            <Counter startTime={1} 
                     interval={500} 
                     timerStopped={this.timerStopped}
                     name="counter2"/>
            <Counter startTime={5} 
                     interval={2000} 
                     timerStopped={this.timerStopped}
                     name="counter3"/>
                     <Calculator/>
                     <PersonneList personneList={persons}/>
          </Fragment>
          
          ); 
  }
 
}

export default App;
