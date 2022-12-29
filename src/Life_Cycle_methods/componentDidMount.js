// setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses.
//Syntax: setState(updater[, callback]) 

import React from "react";

class Mounting extends React.Component{
    constructor()
    {
        super();
        this.state={
            name:"Hyderabad"
        }
        console.warn("constructor");//1st run 
    }

    componentDidMount()
    {
    console.warn("componentDidMount");//3rd run
    }

    render()
    {
        console.warn("render Mount");//2nd run 

        return(
            <div>
                <p>component Did Mount {this.state.name}</p>
            {/* When click on "Update Mount" button then only render() method will run and componentDidMount() will not run because it run only when component Mount i.e Mounting means putting elements into the DOM. But In this update is used that's why componentDidUpdate() will run. */}
            {/* Arrow function is used if normal function will use then function calls itself automatically then setState() goes to infinite loop */}
                <button onClick={()=>{this.setState({name:"Noida"})}}>Update Mount</button>
            </div>
        )
    }
}

export default Mounting;