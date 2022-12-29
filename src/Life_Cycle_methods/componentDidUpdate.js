import React from "react";

class Updating extends React.Component{
    constructor()
    {
        super();
        this.state={
            count:0
        }
        // console.warn("constructor");
    }

    //preState provide previous state of component.
    //The snapshot is only present if getSnapshotBeforeUpdate() is present and returns non-null.
    //If any 'state' and 'props' updates then componentDidUpdate() calls.
    componentDidUpdate(prevProps,prevState,snapshot)
    {
     console.warn("componentDidUpdate",prevState.count,this.state.count,snapshot);

     //When click on Updating button then setState() run 5 times. i.e first run render() then "componentDidUpdate 0 1 undefined". Here, 0 for prevProps, 1 for prevState, undefined for snapshot.

        if(this.state.count < 5){
            this.setState({count:this.state.count+1})
        }
    }

    // The render() method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.

    //render() call every time when component reload
    render(){
        console.warn("render Update");

        return(
            <div>
                <p>Component Did Update {this.state.count}</p>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Updating</button>
            </div>
        )
    }
}

export default Updating;