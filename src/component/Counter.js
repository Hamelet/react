import React from 'react';
import "./counter.css"

class Counter extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            showStartButton: false,
            timer: this.props.startTime
        }
        /*this.stopTimer = this.stopTimer.bind(this)
        this.startTimer = this.startTimer.bind(this)*/
    }

    

    componentDidMount(){
        this.timerId = setInterval(()=>{
            this.setState({ timer: this.state.timer + 1})
        },this.props.interval);
    }

    stopTimer = () => {

        clearInterval(this.timerId)
        this.setState({showStartButton: true})
        alert(`The counter1 is at ${this.state.timer}` ) 
    }

    startTimer = () => {
        this.timerId = setInterval(()=>{
            this.setState({ timer: this.state.timer + 1})
        },this.props.interval);
        this.setState({showStartButton: false}) 
    }

    render(){

        return <div id="timer">
                    {!this.state.showStartButton ? <div></div> : <div>This timer is stopped</div>}
                    <div> This timer started at {this.props.startTime}</div>
                    <div> Timer interval is {this.props.interval}</div> 
                    <div>current count is : {this.state.timer} </div>
                    {this.state.showStartButton ? <button className="btn btn-primary" onClick={this.startTimer}>start !</button> : <button className="btn btn-primary" onClick={this.stopTimer}>Stop !</button>}
                </div>
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

}



export default Counter;