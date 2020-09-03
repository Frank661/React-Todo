import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import "./components/Todo.css"


const list = [
  { name: "Code in the morning",
    id: 123,
    clear: false},
  { name: "Code at night",
    id: 124,
    clear: false}
]




class App extends React.Component {
  // you will need a place to store your state in this component.
constructor(){
  super();
  this.state= {
    list: list
   }
}



  // design `App` to be the parent component of your application.

  toggleItem = (itemId) => {
    this.setState({
      list: this.state.list.map((item)=> {
        if(item.id === itemId) {
          return {
            ...item,
            clear: !item.clear
          }
        }
        return item
      })
    })
  }

  clearList = () => {
    this.setState({
      list: this.state.list.filter((item) => {
        return !item.clear;
      })
    })
  }


  addItem = (itemName) => {
   
    this.setState({
      list: [
        ...this.state.list,
        {id: Date.now(), name: itemName, clear: false}
      ]
    })
  }

  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className = "App">
        <h2>Welcome to your Todo App!</h2>
      
        <div className="Forms">
          <h3> My Todo List!! </h3>
          <TodoForm addItem={this.addItem}/>
        </div>
        <TodoList 
        list = {this.state.list}
        toggleItem={this.toggleItem}
        clearList={this.clearList}
        />
      </div>
    );
  }
}

export default App;
