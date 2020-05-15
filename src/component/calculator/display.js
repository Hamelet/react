import React from "react";
import'./calculator.css';


class Display extends React.Component{


    render=()=>{
    return <div className="calcInput">{this.props.display}</div>
    }
}

export default Display;