import React, {useState} from "react";
import {connect} from "react-redux";
import {todoAdd} from "../../redux/actions";
import TodoAddEmptyTaskModal from "../todo-add-empty-task-modal/todo-add-empty-task-modal";

const TodoAdd = (props) => {

    const [name,setName]=useState('');
    const [isEmpty,setIsEmpty]=useState(false);

    const onSubmit=(name)=>{
        if (name===''){
            setIsEmpty(true);
        }else {
            props.todoAdd(name);
            setIsEmpty(false);
            setName('');
        }
    };

    return (
        <div>
            <div className="card  m-2">
                <div className='card-body p-0'>
                    <div className='d-flex flex-row justify-content-end align-items-center'>
                        <div className='col-sm-9 '>
                            <input className='input-group border-0'
                            onChange={e=>setName(e.target.value)}
                            value={name}
                            placeholder='add new task'/>
                        </div>
                        <div className='col-sm-2 align-items-center pr-1'>
                            <button className='col-sm btn btn-success '
                                    onClick={()=>onSubmit(name)}>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <TodoAddEmptyTaskModal isEmptyTask={isEmpty} onSubmit={()=>setIsEmpty(false)}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    todoList: state.todoList,
});

const mapDispatchToProps = {
    todoAdd: todoAdd,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoAdd);