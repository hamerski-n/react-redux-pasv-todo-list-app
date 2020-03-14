import React from "react";
import './important-tasks.css';
import {connect} from "react-redux";
// import TodoListItem from "../todo-list-item";
import TodoListItemImportant from "../todo-list-item-important/todo-list-item-important";

const ImportantTasks = (props) => {
    return (
        <div className='mt-5'>
            {props.todoList.filter(el=>el.isImportant===true).map(el => <TodoListItemImportant key={el.todoId} todo={el}/>)}
        </div>
    )
};

const mapStateToProps = (state) => ({
    todoList: state.todoList,
});

export default connect(mapStateToProps,)(ImportantTasks);