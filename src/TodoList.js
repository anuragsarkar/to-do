import React, { Component } from "react";
import TodoItems from "./TodoItems"
import "./TodoList.css";


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    
 
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
   
  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
        done: false
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });
     
      this._inputElement.value = "";
    }
     
    console.log(this.state.items);
       
    e.preventDefault();
  }

  deleteItem(itemKey) {
    var index = this.state.items.indexOf(itemKey);
    console.log(this.state.items[index].text);
    var todo = this.state.items[index];
    console.log(todo.key);
    this.state.items.splice(index, 1);
    todo.done = !todo.done;
    todo.done ? this.state.items.push(todo) : this.state.items.unshift(todo);
    this.setState({items: this.state.items});  
    /*var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });*/
  }
  

  render() {
    return (
      
      <div className="todoListMain">
      
        <div className="header">
        
          <form onSubmit={this.addItem}>
          <input ref={(a) => this._inputElement = a} 
                  placeholder="enter task"></input>
          
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}
        delete={this.deleteItem}/>

      </div>
    );
  }
}
 
export default TodoList;