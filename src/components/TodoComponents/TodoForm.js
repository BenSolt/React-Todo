import React from "react";

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state={
            item:''
        };
    }

handleChanges= e => {
    this.setState({
        [e.target.name]: e.target.value
    });
};

submitItem = e => {
this.props.addItem()
};


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
        );
    }
}

export default TodoForm;