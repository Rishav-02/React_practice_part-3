import React from "react";

class Child extends React.Component{

    componentWillUnmount()
    {
       console.warn("componentWillUnmount called");
    }

    render()
    {
        return(
            <div>
                <p>Child Component</p>
            </div>
        )
    }
}

export default Child;