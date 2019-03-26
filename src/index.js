import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
  
var destination = document.querySelector("#container");
var date = new Date().toLocaleString()
  
ReactDOM.render(
    
    <div>
        <div class="date">
      <p> <b>Date</b>: {date}</p>
    </div>
         <TodoList/>
    </div>,
    destination
);