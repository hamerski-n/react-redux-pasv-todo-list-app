import React from "react";
import {connect} from "react-redux";
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";
import {todoDelete, todoTaskDeleteCancel} from "../../redux/actions";

const DeleteConfirmationModal = (props) => {

    return (
        <Modal isOpen={Boolean(props.deleteTaskInfo.name)||props.deleteAllTasksConfirmed} toggle={props.todoTaskDeleteCancel}>
            <ModalHeader className='text-danger'>{props.modal.header}</ModalHeader>
            <ModalBody>
                <strong>{props.deleteTaskInfo.name}</strong> {props.modal.body}
            </ModalBody>
            <ModalFooter>
                <Button color='danger'
                onClick={()=>props.todoDelete({
                    id: props.deleteTaskInfo.id,
                    deleteAll: props.deleteAllTasksConfirmed
                })}>Delete</Button>
                <Button
                    onClick={props.todoTaskDeleteCancel}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
};

const mapStateToProps = (state) => ({
    todoList: state.todoList,
    deleteTaskInfo: state.todoTaskForDelete,
    deleteAllTasksConfirmed: state.clearTodoList,
    modal: state.deleteConfirmationModal
});

const mapDispatchToProps = {
    todoDelete: todoDelete,
    todoTaskDeleteCancel: todoTaskDeleteCancel,
};

export default connect(mapStateToProps,mapDispatchToProps)(DeleteConfirmationModal);