import React from "react";
import'./calculator.css';
import Display from './display';
import Buttons from './button';


class Calculator extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            displayValue: "",
            
        }
        
    }

    clickButton=(char)=>{
        
        this.setState({displayValue: this.state.displayValue.concat(char)})
       
    }
    calculate=()=>{
        this.setState({displayValue: eval(this.state.displayValue).toString()})
      
    }

    clear=()=>{
        this.setState({displayValue: ""})
    }

    render(){
        return <div className="calculator">            
            <Display display={this.state.displayValue}/>
            <Buttons char="clear" click={this.clear}/>
            {["0", "1","2", "3","4", "5","6", "7","8", "9","+", "-","*", "/", "%"].map(character =>{
                return <Buttons key={character} char={character} click={this.clickButton}/>
            })}           
            <Buttons char="=" click={this.calculate}/>
        </div>
    }
}

export default Calculator;

