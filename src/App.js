import React from 'react';

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";


const groceries =[

  {name: 'banana',
  id: 1,
  purhcased: false
  },
  
  {name: 'apple',
  id: 2,
  purhcased: false
  },
  
  ]




class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state={
      groceries
    };
}



  toggleItem = id => {
    console.log(id);
  };
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm/>
        <TodoList
        groceries={this.state.groceries}
        toggleItem={null}
        />
      </div>
    );
  }
}

export default App;
