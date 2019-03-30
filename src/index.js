import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";

var destination = document.getElementById('app');
var dateAndTime = new Date().toLocaleString();
var date = dateAndTime.split(' ')[0].slice(0,10);

ReactDOM.render(

    <div>
        
        <div className="date">
            <p> <b>Date</b>: {date}</p>
        </div>
        <TodoList />
    </div>,
    destination
);