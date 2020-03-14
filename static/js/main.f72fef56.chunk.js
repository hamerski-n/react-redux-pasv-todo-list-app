(this["webpackJsonpreact-redux-pasv-todo-list-app"]=this["webpackJsonpreact-redux-pasv-todo-list-app"]||[]).push([[0],{46:function(e,t,a){e.exports=a(86)},51:function(e,t,a){},52:function(e,t,a){},74:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(14),l=a.n(c),r=(a(51),a(52),a(7)),s=a(41),i=a.n(s);function d(e){return function(t){t({type:"TODO_DONE",payload:e})}}function m(e){return function(t){t({type:"TODO_IMPORTANT",payload:e})}}function u(e){return function(t){t({type:"TODO_EDIT",payload:e})}}function f(e){return function(t){t({type:"TODO_TASK_CONFIRM_DELETE",payload:e})}}function b(e){return function(t){t({type:"TODO_UP",payload:e})}}function E(e){return function(t){t({type:"TODO_DOWN",payload:e})}}var p={clearList:function(){return function(e){e({type:"TODO_LIST_CONFIRM_DELETE_ALL"})}},loadExternalTasks:function(){return function(e){i.a.get("https://jsonplaceholder.typicode.com/todos").then((function(t){e({type:"TODO_LOAD",payload:t.data})})).catch((function(e){console.log(e)}))}}},D=Object(r.b)((function(e){return{todoList:e.todoList}}),p)((function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"card  m-2 border-0"},o.a.createElement("div",{className:"card-body p-0 "},o.a.createElement("div",{className:"d-flex flex-row justify-content-start align-items-center"},o.a.createElement("div",{className:"col-sm-1 pl-0 "},o.a.createElement("strong",null,"Total:")),o.a.createElement("div",{className:"col-sm-2 d-flex pl-0"},e.todoList.length),o.a.createElement("div",{className:"col-sm-2.5 align-items-center"},o.a.createElement("button",{className:"col-sm btn btn-warning",onClick:e.loadExternalTasks},"Add external list")),o.a.createElement("div",{className:"col-sm-2 align-items-center"},o.a.createElement("button",{className:"col-sm btn btn-danger ",onClick:e.clearList},"Clear list"))))))})),O=a(16),N=(a(74),a(91)),T=a(87),v=a(88),L=a(89),k=a(90),y=function(e){return o.a.createElement(N.a,{isOpen:e.isEmptyTask,toggle:e.onSubmit},o.a.createElement(T.a,{className:"text-danger"},"Task is empty"),o.a.createElement(v.a,null,"Please add your task"),o.a.createElement(L.a,null,o.a.createElement(k.a,{onClick:e.onSubmit},"Ok")))},I={todoAdd:function(e){return function(t){t({type:"TODO_ADD",payload:e})}}},j=Object(r.b)((function(e){return{todoList:e.todoList}}),I)((function(e){var t=Object(n.useState)(""),a=Object(O.a)(t,2),c=a[0],l=a[1],r=Object(n.useState)(!1),s=Object(O.a)(r,2),i=s[0],d=s[1];return o.a.createElement("div",null,o.a.createElement("div",{className:"card  m-2"},o.a.createElement("div",{className:"card-body p-0"},o.a.createElement("div",{className:"d-flex flex-row justify-content-end align-items-center"},o.a.createElement("div",{className:"col-sm-9 "},o.a.createElement("input",{className:"input-group border-0",onChange:function(e){return l(e.target.value)},value:c,placeholder:"add new task"})),o.a.createElement("div",{className:"col-sm-2 align-items-center pr-1"},o.a.createElement("button",{className:"col-sm btn btn-success ",onClick:function(){return function(t){""===t?d(!0):(e.todoAdd(t),d(!1),l(""))}(c)}},"Add"))))),o.a.createElement(y,{isEmptyTask:i,onSubmit:function(){return d(!1)}}))})),g=(a(82),{done:d,important:m,edit:u,deleteTaskInfo:f,todoMoveUp:b,todoMoveDown:E}),_=Object(r.b)((function(e){return{todoList:e.todoList}}),g)((function(e){var t,a,c,l=e.todo,r=Object(n.useState)(l.todoName),s=Object(O.a)(r,2),i=s[0],d=s[1];return l.isDone?(t="fa-check-circle",a="done"):(t="fa-circle",a=""),c=l.isImportant?"important":"",o.a.createElement("div",null,o.a.createElement("div",{className:"card  m-2"},o.a.createElement("div",{className:"card-body p-0"},o.a.createElement("div",{className:"d-flex flex-row justify-content-between align-items-center green"},o.a.createElement("div",{className:"col-sm-0.5 p-2 position-left"},o.a.createElement("i",{className:"text-success p-2 position-left far ".concat(t)})),o.a.createElement("div",{className:"col-sm-0.5 btn-group-vertical btn-sm"},o.a.createElement("button",{className:"btn btn-secondary btn-sm",disabled:l.isDisabledButtonUp,onClick:function(){return e.todoMoveUp(l.todoId)}},o.a.createElement("i",{className:"fas fa-sort-up"})),o.a.createElement("button",{className:"btn btn-secondary btn-sm ",disabled:l.isDisabledButtonDown,onClick:function(){return e.todoMoveDown(l.todoId)}},o.a.createElement("i",{className:"fas fa-sort-down"}))),o.a.createElement("div",{className:"col-sm-9 "},!l.isEdit&&o.a.createElement("input",{type:"text",className:"form-control border-0 ".concat(a," ").concat(c),value:l.todoName,disabled:!0}),l.isEdit&&o.a.createElement("input",{type:"text",className:"form-control border-0 ".concat(a," ").concat(c),value:i,disabled:!1,onChange:function(e){return d(e.target.value)},autoFocus:!0})),o.a.createElement("div",{className:"col-sm-2 d-flex flex-row align-items-center"},o.a.createElement("button",{className:"col-sm-3 btn btn-success mr-1",onClick:function(){return e.done(l.todoId)}},o.a.createElement("i",{className:"far fa-check-square"})),o.a.createElement("button",{className:"col-sm-3 btn btn-info mr-1 ",onClick:function(){return e.edit({id:l.todoId,name:i})}},!l.isEdit&&o.a.createElement("i",{className:"fas fa-edit"}),l.isEdit&&o.a.createElement("i",{className:"far fa-save"})),o.a.createElement("button",{className:"col-sm-3 btn btn-danger mr-1",onClick:function(){return e.deleteTaskInfo({id:l.todoId,name:l.todoName})}},o.a.createElement("i",{className:"far fa-trash-alt"})),o.a.createElement("button",{className:"col-sm-3 btn btn-warning",onClick:function(){return e.important(l.todoId)}},o.a.createElement("i",{className:"fas fa-exclamation"})))))))})),h=Object(r.b)((function(e){return{todoList:e.todoList}}))((function(e){return o.a.createElement("div",null,e.todoList.map((function(e){return o.a.createElement(_,{key:e.todoId,todo:e})})))})),w={todoDelete:function(e){return e.deleteAll?function(t){t({type:"TODO_TASK_DELETE_ALL",payload:e.deleteAll})}:function(t){t({type:"TODO_TASK_DELETE",payload:e.id})}},todoTaskDeleteCancel:function(){return function(e){e({type:"TODO_TASK_DELETE_CANCEL"})}}},C=Object(r.b)((function(e){return{todoList:e.todoList,deleteTaskInfo:e.todoTaskForDelete,deleteAllTasksConfirmed:e.clearTodoList,modal:e.deleteConfirmationModal}}),w)((function(e){return o.a.createElement(N.a,{isOpen:Boolean(e.deleteTaskInfo.name)||e.deleteAllTasksConfirmed,toggle:e.todoTaskDeleteCancel},o.a.createElement(T.a,{className:"text-danger"},e.modal.header),o.a.createElement(v.a,null,o.a.createElement("strong",null,e.deleteTaskInfo.name)," ",e.modal.body),o.a.createElement(L.a,null,o.a.createElement(k.a,{color:"danger",onClick:function(){return e.todoDelete({id:e.deleteTaskInfo.id,deleteAll:e.deleteAllTasksConfirmed})}},"Delete"),o.a.createElement(k.a,{onClick:e.todoTaskDeleteCancel},"Cancel")))})),x=a(21),A=a(15),B=(a(83),a(84),{done:d,important:m,edit:u,deleteTaskInfo:f,todoMoveUp:b,todoMoveDown:E}),M=Object(r.b)((function(e){return{todoList:e.todoList}}),B)((function(e){var t,a,c,l=e.todo,r=Object(n.useState)(l.todoName),s=Object(O.a)(r,2),i=s[0],d=s[1];return l.isDone?(t="fa-check-circle",a="done"):(t="fa-circle",a=""),c=l.isImportant?"important":"",o.a.createElement("div",null,o.a.createElement("div",{className:"card  m-2"},o.a.createElement("div",{className:"card-body p-0"},o.a.createElement("div",{className:"d-flex flex-row justify-content-between align-items-center green"},o.a.createElement("div",{className:"col-sm-0.5 p-2 position-left"},o.a.createElement("i",{className:"text-success p-2 position-left far ".concat(t)})),o.a.createElement("div",{className:"col-sm-0.5 btn-group-vertical btn-sm"}),o.a.createElement("div",{className:"col-sm-9 "},!l.isEdit&&o.a.createElement("input",{type:"text",className:"form-control border-0 ".concat(a," ").concat(c),value:l.todoName,disabled:!0}),l.isEdit&&o.a.createElement("input",{type:"text",className:"form-control border-0 ".concat(a," ").concat(c),value:i,disabled:!1,onChange:function(e){return d(e.target.value)},autoFocus:!0})),o.a.createElement("div",{className:"col-sm-2 d-flex flex-row align-items-center"},o.a.createElement("button",{className:"col-sm-3 btn btn-success mr-1",onClick:function(){return e.done(l.todoId)}},o.a.createElement("i",{className:"far fa-check-square"})),o.a.createElement("button",{className:"col-sm-3 btn btn-info mr-1 ",onClick:function(){return e.edit({id:l.todoId,name:i})}},!l.isEdit&&o.a.createElement("i",{className:"fas fa-edit"}),l.isEdit&&o.a.createElement("i",{className:"far fa-save"})),o.a.createElement("button",{className:"col-sm-3 btn btn-danger mr-1",onClick:function(){return e.deleteTaskInfo({id:l.todoId,name:l.todoName})}},o.a.createElement("i",{className:"far fa-trash-alt"})),o.a.createElement("button",{className:"col-sm-3 btn btn-warning",onClick:function(){return e.important(l.todoId)}},o.a.createElement("i",{className:"fas fa-exclamation"})))))),o.a.createElement(C,null))})),S=Object(r.b)((function(e){return{todoList:e.todoList}}))((function(e){return o.a.createElement("div",{className:"mt-5"},e.todoList.filter((function(e){return!0===e.isImportant})).map((function(e){return o.a.createElement(M,{key:e.todoId,todo:e})})))}));function U(){return o.a.createElement("div",{className:"App"},o.a.createElement("br",null),o.a.createElement("h1",{align:"left",className:"p-2"}," To Do List "),o.a.createElement(D,null),o.a.createElement(j,null),o.a.createElement(h,null),o.a.createElement(C,null))}var F=function(){return o.a.createElement(x.a,null,o.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top bg-dark"},o.a.createElement("div",{className:""},o.a.createElement("ul",{className:"nav flex-row"},o.a.createElement("li",{className:"nav-item mr-3"},o.a.createElement(x.b,{to:"/"},"To Do")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(x.b,{to:"/important"},"Important Tasks"))))),o.a.createElement(A.c,null,o.a.createElement(A.a,{path:"/important"},o.a.createElement(S,{className:"m-5"})),o.a.createElement(A.a,{path:"/"},o.a.createElement(U,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(17),R=a(43),P=a(44),W=a(12),q=a(5),J={todoList:[{todoId:201,todoName:"todo 1",isDone:!1,isEdit:!1,isImportant:!1,isDisabledButtonUp:!0,isDisabledButtonDown:!1},{todoId:202,todoName:"todo 2",isDone:!1,isEdit:!1,isImportant:!0,isDisabledButtonUp:!1,isDisabledButtonDown:!1},{todoId:203,todoName:"todo 3",isDone:!1,isEdit:!1,isImportant:!1,isDisabledButtonUp:!1,isDisabledButtonDown:!1},{todoId:204,todoName:"todo 4",isDone:!1,isEdit:!1,isImportant:!1,isDisabledButtonUp:!1,isDisabledButtonDown:!0}],deleteConfirmationModal:{header:"Delete Task",body:" will be permanently deleted"},todoTaskForDelete:{id:"",name:""},clearTodoList:!1},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TODO_DONE":return Object(q.a)({},e,{todoList:Object(W.a)(e.todoList.map((function(e){return e.todoId===t.payload?Object(q.a)({},e,{isDone:!e.isDone}):Object(q.a)({},e)})))});case"TODO_IMPORTANT":return Object(q.a)({},e,{todoList:Object(W.a)(e.todoList.map((function(e){return e.todoId===t.payload?Object(q.a)({},e,{isImportant:!e.isImportant}):Object(q.a)({},e)})))});case"TODO_EDIT":return Object(q.a)({},e,{todoList:Object(W.a)(e.todoList.map((function(e){return e.todoId===t.payload.id?Object(q.a)({},e,{isEdit:!e.isEdit,todoName:t.payload.name}):Object(q.a)({},e)})))});case"TODO_ADD":return Object(q.a)({},e,{todoList:[].concat(Object(W.a)(Q(Object(W.a)(e.todoList))),[{todoId:z(204,1e3),todoName:t.payload,isDone:!1,isEdit:!1,isImportant:!1,isDisabledButtonUp:!1,isDisabledButtonDown:!0}])});case"TODO_LOAD":return Object(q.a)({},e,{todoList:[].concat(Object(W.a)(Q(Object(W.a)(e.todoList))),Object(W.a)(t.payload.map((function(e){return{todoId:e.id,todoName:e.title,isDone:e.completed,isEdit:!1,isImportant:!1,isDisabledButtonUp:!1,isDisabledButtonDown:!1}}))))});case"TODO_TASK_CONFIRM_DELETE":return Object(q.a)({},e,{todoTaskForDelete:t.payload,deleteConfirmationModal:J.deleteConfirmationModal});case"TODO_LIST_CONFIRM_DELETE_ALL":return Object(q.a)({},e,{clearTodoList:!0,deleteConfirmationModal:{header:"Delete Tasks",body:"All tasks will be permanently deleted"}});case"TODO_TASK_DELETE":return Object(q.a)({},e,{todoList:e.todoList.filter((function(e){return e.todoId!==t.payload})),todoTaskForDelete:J.todoTaskForDelete});case"TODO_TASK_DELETE_ALL":return Object(q.a)({},e,{todoList:[],todoTaskForDelete:J.todoTaskForDelete,clearTodoList:!1});case"TODO_TASK_DELETE_CANCEL":return Object(q.a)({},e,{todoTaskForDelete:J.todoTaskForDelete,clearTodoList:!1});case"TODO_UP":return Object(q.a)({},e,{todoList:G(Object(W.a)(e.todoList),t.payload)});case"TODO_DOWN":return Object(q.a)({},e,{todoList:H(Object(W.a)(e.todoList),t.payload)});default:return e}};function z(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}function G(e,t){var a=e.findIndex((function(e){return e.todoId===t}));if(a>0){var n=Object(W.a)(e);return n.splice(a,1),n.splice(a-1,0,e[a]),1===a?(n[0].isDisabledButtonUp=!0,n[1].isDisabledButtonUp=!1):a===n.length-1&&(n[a-1].isDisabledButtonDown=!1,n[a].isDisabledButtonDown=!0),n}}function H(e,t){var a=e.findIndex((function(e){return e.todoId===t}));if(a<e.length-1){var n=Object(W.a)(e);return n.splice(a,1),n.splice(a+1,0,e[a]),0===a?(n[0].isDisabledButtonUp=!0,n[1].isDisabledButtonUp=!1):a===n.length-2&&(n[a].isDisabledButtonDown=!1,n[a+1].isDisabledButtonDown=!0),n}}function Q(e){return e.map((function(t){return e.findIndex((function(e){return e.todoId===t.todoId}))===e.length-1?Object(q.a)({},t,{isDisabledButtonDown:!1}):Object(q.a)({},t)}))}var V=Object(K.createStore)($,Object(P.composeWithDevTools)(Object(K.applyMiddleware)(R.a)));l.a.render(o.a.createElement(r.a,{store:V},o.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.f72fef56.chunk.js.map