import React from "react";
import './todo-add-empty-task-modal.css'
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";

const TodoAddEmptyTaskModal = (props) => {

    return (
        <Modal isOpen={props.isEmptyTask} toggle={props.onSubmit}>
            <ModalHeader className='text-danger'>Task is empty</ModalHeader>
            <ModalBody>
                Please add your task
            </ModalBody>
            <ModalFooter>
                <Button
                    onClick={props.onSubmit}
                    >Ok</Button>
            </ModalFooter>
        </Modal>
    )
};

export default TodoAddEmptyTaskModal;