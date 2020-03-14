import React from 'react';
import './App.css';
import TodoLoad from "../todo-load";
import TodoAdd from "../todo-add";
import TodoList from "../todo-list";
import DeleteConfirmationModal from "../delete-confirmation-modal/delete-confirmation-modal";

function App() {
    return (
        <div className="App">
            <h1 align='left' className='pl-2'> Todo List </h1>
            <TodoLoad/>
            <TodoAdd/>
            <TodoList/>
            <DeleteConfirmationModal/>
        </div>
    );
}

export default App;
