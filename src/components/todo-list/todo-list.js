import React from "react";
import TodoListItem from "../todo-list-item";
import {connect} from "react-redux";


const TodoList = (props) => {
    return (
        <div>
            {props.todoList.map(el => <TodoListItem key={el.todoId} todo={el}/>)}
        </div>
    )
};

const mapStateToProps = (state) => ({
    todoList: state.todoList,
});

export default connect(mapStateToProps,)(TodoList);