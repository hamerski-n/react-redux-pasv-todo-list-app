import axios from 'axios';

export function todoListAddExternal() {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                dispatch({type: 'TODO_LOAD', payload: response.data});
                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export function todoDone(todoId) {
    return (dispatch) => {
        dispatch({type: 'TODO_DONE', payload: todoId})
    }
}

export function todoImportant(todoId) {
    return (dispatch) => {
        dispatch({type: 'TODO_IMPORTANT', payload: todoId})
    }
}

export function todoEdit(todoId) {
    return (dispatch) => {
        dispatch({type: 'TODO_EDIT', payload: todoId})
    }
}

export function todoAdd(name) {
    return (dispatch) => {
        dispatch({type: 'TODO_ADD', payload: name})
    }
}

export function todoTaskConfirmDelete(task) {
    return (dispatch) => {
        dispatch({type: 'TODO_TASK_CONFIRM_DELETE', payload: task})
    }
}

export function todoDelete(args) {
    if (args.deleteAll) {
        return (dispatch) => {
            dispatch({type: 'TODO_TASK_DELETE_ALL', payload: args.deleteAll});
        }
    } else {
        return (dispatch) => {
            dispatch({type: 'TODO_TASK_DELETE', payload: args.id});
        }
    }
}

export function todoTaskDeleteCancel() {
    return (dispatch) => {
        dispatch({type: 'TODO_TASK_DELETE_CANCEL'})
    }
}

export function todoListConfirmDeleteAll() {
    return (dispatch) => {
        dispatch({type: 'TODO_LIST_CONFIRM_DELETE_ALL'})
    }
}

export function todoMoveUp(todoId) {
    return (dispatch) => {
        dispatch({type: 'TODO_UP', payload: todoId})
    }
}
export function todoMoveDown(todoId) {
    return (dispatch) => {
        dispatch({type: 'TODO_DOWN', payload: todoId})
    }
}
