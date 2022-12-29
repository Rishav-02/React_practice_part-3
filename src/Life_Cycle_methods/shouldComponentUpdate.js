import React from 'react';

class ShouldComponent extends React.Component{
    constructor()
    {
        super();
        this.state={
           count:0
        }
    }

/* Syntax:

shouldComponentUpdate(nextProps, nextState)

Return value: It by default it returns true and if it returns false then render(), componentWillUpdate() and componentDidUpdate() method does not gets invoked.
 */
   
    //Bydefault false means restrict from updating the component
    shouldComponentUpdate()
    {
        console.warn("shouldComponentUpdate",this.state.count);//click then console run
        if(this.state.count > 5 && this.state.count < 10)
        {
            return true;//state update
        }
        return false;//to remove warning
    }

    render()
    {
        return(
            <div>
            {/* p tag update directly when click button 7th time due to if condition */}
                <p>Should Component Update   {this.state.count}</p>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Counter</button>
            </div>
        )
    }
}

export default ShouldComponent;