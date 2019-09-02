import React from 'react';

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";



const groceries =[

  {name: 'Breakfast',
  id: 1,
  purhcased: false
  },
  
  {name: 'Lambda- Lecture Class Components',
  id: 2,
  purhcased: false
  },

  {name: 'Enjoy the rest of the day!',
  id: 3,
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

    this.setState({
      groceries: this.state.groceries.map(item => {
        if (item.id === id) {
        return {
          ...item,
          purchased: !item.purchased
        }
      } else {
        return item;
      }
      })
     
    })

  };

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      purhcased: false
      
    }
    this.setState({
      groceries: [...this.state.groceries, newItem]
    })
  }

  
  render() {
    return (
      <div>
        <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
        groceries={this.state.groceries}
        toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
