import React from "react";

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state={
            item:''
        };
    }

    render(){
        return(
            <form OnSubmit={this.submitItem}>
            <input
            type="text"
            value={this.state.item}
            name="item"
            onChange={this.handleChanges}
            />
              <button>Add</button>  
            </form>
        )
    }
}