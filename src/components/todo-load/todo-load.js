import React from "react";
import {connect} from "react-redux";
import {todoListConfirmDeleteAll, todoListAddExternal} from "../../redux/actions";


const TodoLoad = (props) => {
    return (
        <div>
            <div className="card  m-2 border-0">
                <div className='card-body p-0 '>
                    <div className='d-flex flex-row justify-content-start align-items-center'>
                        <div className='col-sm-1 pl-0 '>
                            <strong>Total:</strong>
                        </div>
                        <div className='col-sm-2 d-flex pl-0'>
                            {props.todoList.length}
                        </div>
                        <div className='col-sm-2.5 align-items-center'>
                            <button className='col-sm btn btn-warning'
                            onClick={props.loadExternalTasks}>
                                Add external list
                            </button>
                        </div>
                        <div className='col-sm-2 align-items-center'>
                            <button className='col-sm btn btn-danger '
                            onClick={props.clearList}>
                                Clear list
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
    clearList: todoListConfirmDeleteAll,
    loadExternalTasks: todoListAddExternal,
};

export default connect(mapStateToProps,mapDispatchToProps)(TodoLoad);
