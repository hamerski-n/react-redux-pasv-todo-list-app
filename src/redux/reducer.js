const initialState = {
    todoList: [
        {
            todoId: 201,
            todoName: 'todo 1',
            isDone: false,
            isEdit: false,
            isImportant: false,
            isDisabledButtonUp: true,
            isDisabledButtonDown: false,
        },
        {
            todoId: 202,
            todoName: 'todo 2',
            isDone: false,
            isEdit: false,
            isImportant: true,
            isDisabledButtonUp: false,
            isDisabledButtonDown: false,
        },
        {
            todoId: 203,
            todoName: 'todo 3',
            isDone: false,
            isEdit: false,
            isImportant: false,
            isDisabledButtonUp: false,
            isDisabledButtonDown: false,
        },
        {
            todoId: 204,
            todoName: 'todo 4',
            isDone: false,
            isEdit: false,
            isImportant: false,
            isDisabledButtonUp: false,
            isDisabledButtonDown: true,
        }
    ],

    deleteConfirmationModal: {header: 'Delete Task', body: ' will be permanently deleted'},
    todoTaskForDelete: {id: '', name: ''},
    clearTodoList: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TODO_DONE':
            return {
                ...state,
                todoList: [...state.todoList.map(el => {
                    if (el.todoId === action.payload) {
                        return {...el, isDone: !el.isDone}
                    } else
                        return {...el}
                })]
            };

        case 'TODO_IMPORTANT':
            return {
                ...state,
                todoList: [...state.todoList.map(el => {
                    if (el.todoId === action.payload) {
                        return {...el, isImportant: !el.isImportant}
                    } else
                        return {...el}
                })]
            };

        case 'TODO_EDIT':
            return {
                ...state,
                todoList: [...state.todoList.map(el => {
                    if (el.todoId === action.payload.id) {
                        return {...el, isEdit: !el.isEdit, todoName: action.payload.name}
                    } else
                        return {...el}
                })]
            };

        case 'TODO_UNDO_EDIT':
            return {
                ...state,
                todoList: [...state.todoList.map(el => {
                    if (el.todoId === action.payload) {
                        console.log('HERE');
                        return {...el, isEdit: !el.isEdit}
                    } else
                        return {...el}
                })]
            };

        case 'TODO_ADD':
            return {
                ...state,
                todoList: [
                    ...disabledLastButtonDown([...state.todoList]),
                    (()=>{if ([...state.todoList].length===0){          //if we add to an empty list both buttons are disabled
                        return {
                            todoId: getRandomInt(204, 1000),
                            todoName: action.payload,
                            isDone: false,
                            isEdit: false,
                            isImportant: false,
                            isDisabledButtonUp: true,
                            isDisabledButtonDown: true}
                        }else {
                        return {
                            todoId: getRandomInt(204, 1000),
                            todoName: action.payload,
                            isDone: false,
                            isEdit: false,
                            isImportant: false,
                            isDisabledButtonUp: false,
                            isDisabledButtonDown: true
                        }}
                    })()
                ]
            };
        case 'TODO_LOAD':
            return {
                ...state,
                todoList: (() => {
                    const newList = [
                        ...disabledLastButtonDown([...state.todoList]), //Before load an external list disable Last Button Down
                        ...action.payload.map(el => (
                            {
                                todoId: el.id,
                                todoName: el.title,
                                isDone: el.completed,
                                isEdit: false,
                                isImportant: false,
                                isDisabledButtonUp: false,
                                isDisabledButtonDown: false,
                            }))
                    ];
                    newList[0].isDisabledButtonUp = true; //If we add an external list to an empty list
                    newList[newList.length-1].isDisabledButtonDown = true;
                    return newList
                })()
            };

        case 'TODO_TASK_CONFIRM_DELETE':
            return {
                ...state,
                todoTaskForDelete: action.payload,
                deleteConfirmationModal: initialState.deleteConfirmationModal
            };

        case 'TODO_LIST_CONFIRM_DELETE_ALL':
            return {
                ...state,
                clearTodoList: true,
                deleteConfirmationModal: {header: 'Delete Tasks', body: 'All tasks will be permanently deleted'}
            };

        case 'TODO_TASK_DELETE':
            return {
                ...state,
                todoList: state.todoList.filter(el => el.todoId !== action.payload),
                todoTaskForDelete: initialState.todoTaskForDelete
            };

        case 'TODO_TASK_DELETE_ALL':
            return {
                ...state,
                todoList: [],
                todoTaskForDelete: initialState.todoTaskForDelete,
                clearTodoList: false,
            };

        case 'TODO_TASK_DELETE_CANCEL':
            return {
                ...state,
                todoTaskForDelete: initialState.todoTaskForDelete,
                clearTodoList: false
            };

        case 'TODO_UP':
            return {
                ...state,
                todoList: up([...state.todoList], action.payload)
            };

        case 'TODO_DOWN':
            return {
                ...state,
                todoList: down([...state.todoList], action.payload)
            };

        default:
            return state
    }
};

export default reducer;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function up(todoList, id) {
    const idx = todoList.findIndex(el => el.todoId === id); //Assume idx > 0. You cannot go Up for first task
    const newList = [...todoList];

    newList.splice(idx, 1);
    newList.splice(idx - 1, 0, todoList[idx]);
    if (todoList.length === 2) {
        newList[0].isDisabledButtonUp = true;
        newList[0].isDisabledButtonDown = false;
        newList[1].isDisabledButtonUp = false;
        newList[1].isDisabledButtonDown = true;
    } else {
        if (idx === 1) {
            newList[0].isDisabledButtonUp = true;
            newList[1].isDisabledButtonUp = false;
        } else if (idx === newList.length - 1) {
            newList[idx - 1].isDisabledButtonDown = false;
            newList[idx].isDisabledButtonDown = true;
        }
    }

    return newList
}

function down(todoList, id) {
    const idx = todoList.findIndex(el => el.todoId === id);
    if (idx < todoList.length - 1) {
        const newList = [...todoList];
        newList.splice(idx, 1);
        newList.splice(idx + 1, 0, todoList[idx]);
        if (todoList.length === 2) {
            newList[0].isDisabledButtonUp = true;
            newList[0].isDisabledButtonDown = false;
            newList[1].isDisabledButtonUp = false;
            newList[1].isDisabledButtonDown = true;
        } else {
            if (idx === 0) {
                newList[0].isDisabledButtonUp = true;
                newList[1].isDisabledButtonUp = false;
            } else if (idx === newList.length - 2) {
                newList[idx].isDisabledButtonDown = false;
                newList[idx + 1].isDisabledButtonDown = true;
            }
        }
        return newList
    }
}

function disabledLastButtonDown(todoList) {
    return todoList.map(todo => {
        if (todoList.findIndex(el => el.todoId === todo.todoId) === todoList.length - 1) {
            return {...todo, isDisabledButtonDown: false}
        } else
            return {...todo}
    });
}
//
// if (todoList.findIndex(el => el.todoId === todo.todoId) === 0) {
//     return {...todo, isDisabledButtonUp: true}
// }else