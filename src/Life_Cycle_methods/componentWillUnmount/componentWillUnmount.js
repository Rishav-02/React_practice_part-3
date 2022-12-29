//The componentWillUnmount() method allows us to execute the React code when the component gets destroyed or unmounted from the DOM (Document Object Model). This method is called during the Unmounting phase of the React Life-cycle i.e before the component gets unmounted.

// All the cleanups such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount() should be coded in the componentWillUnmount() method block.

//Tip: Never call setState() in componentWillUnmount() method.

import React from "react";
import Child from "./Unmount";

class Unmount extends React.Component{
    constructor()
    {
        super();
        this.state={
            show:true
        }
    }
 
    render()
    {
        // When Child Component deleted then componentWillUnmount() called.
        return(
            <div>
            {
              this.state.show ? <Child/> : <p>Child Component Unmount</p>                

            }
            {/* When click on toggle button then componentWillUnmount() called and then click second time back in it's original form{means Toggle} then again click method calls so on */}
                <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle Child Component</button>
            </div>
        )
    }
}

export default Unmount;