// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from "./Todo";

const TodoList = props => {



return(
    <div className="To do List">
        {props.todos.map(item => (
            <Todo key={item.id} item={item} toggleItem={props.toggleItem}/>
        ))}
        <button className="clear-btn" onClick={props.clearItem}>
            Clear Item
        </button>     
    </div>
    );
  };
    export default TodoList;