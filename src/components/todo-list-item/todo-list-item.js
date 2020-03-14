import React from "react";
import './todo-list-item.css'
import {connect} from "react-redux";
import {
    todoDone,
    todoEdit,
    todoImportant,
    todoMoveDown,
    todoMoveUp,
    todoTaskConfirmDelete
} from "../../redux/actions";

const TodoListItem = (props) => {
    const todo = props.todo;

    let check, done, important;

    if (todo.isDone) {
        check = 'fa-check-circle';
        done = 'done';
    } else {
        check = 'fa-circle';
        done = '';
    }
    if (todo.isImportant) {
        important = 'important';
    } else {
        important = '';
    }

    return (
        <div>
            <div className="card  m-2">
                <div className='card-body p-0'>
                    <div className='d-flex flex-row justify-content-between align-items-center green'>
                        <div className='col-sm-0.5 p-2 position-left'>
                            <i className={`text-success p-2 position-left far ${check}`}></i>
                        </div>
                        <div className='col-sm-0.5 btn-group-vertical btn-sm'>
                            <button className='btn btn-secondary btn-sm'
                                    disabled={todo.isDisabledButtonUp}
                                    onClick={() => props.todoMoveUp(todo.todoId)}>
                                <i className="fas fa-sort-up"></i>
                            </button>
                            <button className='btn btn-secondary btn-sm '
                                    disabled={todo.isDisabledButtonDown}
                                    onClick={() => props.todoMoveDown(todo.todoId)}>
                                <i className="fas fa-sort-down"></i>
                            </button>
                        </div>
                        <div className='col-sm-9 '>
                            {!todo.isEdit && <input type='text'
                                                    className={`form-control border-0 ${done} ${important}`}
                                                    value={todo.todoName}
                                                    disabled={true}/>}
                            {todo.isEdit && <input type='text'
                                                   className={`form-control border-0 ${done} ${important}`}
                                                   value={todo.todoName}
                                                   disabled={false}
                                                   autoFocus/>}
                        </div>
                        <div className='col-sm-2 d-flex flex-row align-items-center'>
                            <button className='col-sm-3 btn btn-success mr-1'
                                    onClick={() => props.done(todo.todoId)}>
                                <i className="far fa-check-square"></i>
                            </button>

                            <button className='col-sm-3 btn btn-info mr-1 '
                                    onClick={() => props.edit(todo.todoId)}>
                                <i className="fas fa-edit"></i>
                            </button>
                            <button className='col-sm-3 btn btn-danger mr-1'
                                    onClick={() => props.deleteTaskInfo({
                                        id: todo.todoId,
                                        name: todo.todoName
                                    })}>
                                <i className="far fa-trash-alt"></i>
                            </button>
                            <button className='col-sm-3 btn btn-warning'
                                    onClick={() => props.important(todo.todoId)}>
                                <i className="far fa-star"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    todoList: state.todoList,
});

const mapDispatchToProps = {
    done: todoDone,
    important: todoImportant,
    edit: todoEdit,
    deleteTaskInfo: todoTaskConfirmDelete,
    todoMoveUp: todoMoveUp,
    todoMoveDown: todoMoveDown,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);