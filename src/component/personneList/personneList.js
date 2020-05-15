import React, { Fragment } from 'react';


class PersonneList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            personList:this.props.personneList
        }
    }

    deleteUser=(userId)=>{
        this.setState({personList: this.state.personList.filter( person => person.id !== userId )})
    }

    render=()=>{
        
        return <Fragment>
            {this.state.personList.map(person => {
                return <Person personData={person} deleteUser={this.deleteUser}/>
            })}
        </Fragment>
            
        
    }

}

class Person extends React.Component{
    render(){
        return <div className="tabl">
                    <span>{this.props.personData.id}</span> - <span>{this.props.personData.name}</span> <button onClick={()=>{this.props.deleteUser(this.props.personData.id)}}>edith user</button>
                </div>
    }
}

export default PersonneList;