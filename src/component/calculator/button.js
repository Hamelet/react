import React from "react";
import'./calculator.css';

class Buttons extends React.Component{



  

    render(){
    return <button className="button" onClick={()=>this.props.click(this.props.char)}>{this.props.char}</button>
    }

   

   
}

export default Buttons;