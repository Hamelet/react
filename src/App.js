import React, { Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter'


class App extends React.Component {
  
  
  render(){
      return(
          <Fragment>
            <Counter startTime={10} interval={1000}/>
            <Counter startTime={1} interval={500}/>
            <Counter startTime={5} interval={2000}/>
          </Fragment>
          ); 
  }
 
}

export default App;
