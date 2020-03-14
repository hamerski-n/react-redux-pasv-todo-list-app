import React from 'react';
import './App.css';
import TodoLoad from "../todo-load";
import TodoAdd from "../todo-add";
import TodoList from "../todo-list";
import DeleteConfirmationModal from "../delete-confirmation-modal/delete-confirmation-modal";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ImportantTasks from "../important-tasks/important-tasks";

function App() {
    return (
        <Router>
            <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
                <div className=''>
                    <ul className='nav flex-row'>
                        <li className='nav-item mr-3'>
                            <Link to="/">To Do</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/important">Important Tasks</Link>
                        </li>
                    </ul>
                </div>
            </nav>
                    <Switch>
                        <Route path="/important">
                            <ImportantTasks className='m-5'/>
                        </Route>
                        <Route path="/">
                            <ToDo/>
                        </Route>
                    </Switch>

        </Router>
    );
}

export default App;

function ToDo() {
    return (
            <div className="App">
                <br/>
                <h1 align='left' className='p-2'> To Do List </h1>
                <TodoLoad/>
                <TodoAdd/>
                <TodoList/>
                <DeleteConfirmationModal/>
            </div>
        )
}

