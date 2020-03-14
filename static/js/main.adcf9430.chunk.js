(this["webpackJsonpreact-redux-pasv-todo-list-app"]=this["webpackJsonpreact-redux-pasv-todo-list-app"]||[]).push([[0],{46:function(e,t,a){e.exports=a(85)},51:function(e,t,a){},52:function(e,t,a){},74:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(14),c=a.n(l),r=(a(51),a(52),a(8)),s=a(41),i=a.n(s);var d={clearList:function(){return function(e){e({type:"TODO_LIST_CONFIRM_DELETE_ALL"})}},loadExternalTasks:function(){return function(e){i.a.get("https://jsonplaceholder.typicode.com/todos").then((function(t){e({type:"TODO_LOAD",payload:t.data})})).catch((function(e){console.log(e)}))}}},m=Object(r.b)((function(e){return{todoList:e.todoList}}),d)((function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"card  m-2 border-0"},o.a.createElement("div",{className:"card-body p-0 "},o.a.createElement("div",{className:"d-flex flex-row justify-content-start align-items-center"},o.a.createElement("div",{className:"col-sm-1 pl-0 "},o.a.createElement("strong",null,"Total:")),o.a.createElement("div",{className:"col-sm-2 d-flex pl-0"},e.todoList.length),o.a.createElement("div",{className:"col-sm-2.5 align-items-center"},o.a.createElement("button",{className:"col-sm btn btn-warning",onClick:e.loadExternalTasks},"Add external list")),o.a.createElement("div",{className:"col-sm-2 align-items-center"},o.a.createElement("button",{className:"col-sm btn btn-danger ",onClick:e.clearList},"Clear list"))))))})),u=a(25),f=(a(74),a(90)),b=a(86),E=a(87),p=a(88),D=a(89),O=function(e){return o.a.createElement(f.a,{isOpen:e.isEmptyTask,toggle:e.onSubmit},o.a.createElement(b.a,{className:"text-danger"},"Task is empty"),o.a.createElement(E.a,null,"Please add your task"),o.a.createElement(p.a,null,o.a.createElement(D.a,{onClick:e.onSubmit},"Ok")))},T={todoAdd:function(e){return function(t){t({type:"TODO_ADD",payload:e})}}},N=Object(r.b)((function(e){return{todoList:e.todoList}}),T)((function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],c=a[1],r=Object(n.useState)(!1),s=Object(u.a)(r,2),i=s[0],d=s[1];return o.a.createElement("div",null,o.a.createElement("div",{className:"card  m-2"},o.a.createElement("div",{className:"card-body p-0"},o.a.createElement("div",{className:"d-flex flex-row justify-content-end align-items-center"},o.a.createElement("div",{className:"col-sm-9 "},o.a.createElement("input",{className:"input-group border-0",onChange:function(e){return c(e.target.value)},value:l,placeholder:"add new task"})),o.a.createElement("div",{className:"col-sm-2 align-items-center pr-1"},o.a.createElement("button",{className:"col-sm btn btn-success ",onClick:function(){return function(t){""===t?d(!0):(e.todoAdd(t),d(!1),c(""))}(l)}},"Add"))))),o.a.createElement(O,{isEmptyTask:i,onSubmit:function(){return d(!1)}}))})),L=(a(82),{done:function(e){return function(t){t({type:"TODO_DONE",payload:e})}},important:function(e){return function(t){t({type:"TODO_IMPORTANT",payload:e})}},edit:function(e){return function(t){t({type:"TODO_EDIT",payload:e})}},deleteTaskInfo:function(e){return function(t){t({type:"TODO_TASK_CONFIRM_DELETE",payload:e})}},todoMoveUp:function(e){return function(t){t({type:"TODO_UP",payload:e})}},todoMoveDown:function(e){return function(t){t({type:"TODO_DOWN",payload:e})}}}),v=Object(r.b)((function(e){return{todoList:e.todoList}}),L)((function(e){var t,a,n,l=e.todo;return l.isDone?(t="fa-check-circle",a="done"):(t="fa-circle",a=""),n=l.isImportant?"important":"",o.a.createElement("div",null,o.a.createElement("div",{className:"card  m-2"},o.a.createElement("div",{className:"card-body p-0"},o.a.createElement("div",{className:"d-flex flex-row justify-content-between align-items-center green"},o.a.createElement("div",{className:"col-sm-0.5 p-2 position-left"},o.a.createElement("i",{className:"text-success p-2 position-left far ".concat(t)})),o.a.createElement("div",{className:"col-sm-0.5 btn-group-vertical btn-sm"},o.a.createElement("button",{className:"btn btn-secondary btn-sm",disabled:l.isDisabledButtonUp,onClick:function(){return e.todoMoveUp(l.todoId)}},o.a.createElement("i",{className:"fas fa-sort-up"})),o.a.createElement("button",{className:"btn btn-secondary btn-sm ",disabled:l.isDisabledButtonDown,onClick:function(){return e.todoMoveDown(l.todoId)}},o.a.createElement("i",{className:"fas fa-sort-down"}))),o.a.createElement("div",{className:"col-sm-9 "},!l.isEdit&&o.a.createElement("input",{type:"text",className:"form-control border-0 ".concat(a," ").concat(n),value:l.todoName,disabled:!0}),l.isEdit&&o.a.createElement("input",{type:"text",className:"form-control border-0 ".concat(a," ").concat(n),value:l.todoName,disabled:!1,autoFocus:!0})),o.a.createElement("div",{className:"col-sm-2 d-flex flex-row align-items-center"},o.a.createElement("button",{className:"col-sm-3 btn btn-success mr-1",onClick:function(){return e.done(l.todoId)}},o.a.createElement("i",{className:"far fa-check-square"})),o.a.createElement("button",{className:"col-sm-3 btn btn-info mr-1 ",onClick:function(){return e.edit(l.todoId)}},o.a.createElement("i",{className:"fas fa-edit"})),o.a.createElement("button",{className:"col-sm-3 btn btn-danger mr-1",onClick:function(){return e.deleteTaskInfo({id:l.todoId,name:l.todoName})}},o.a.createElement("i",{className:"far fa-trash-alt"})),o.a.createElement("button",{className:"col-sm-3 btn btn-warning",onClick:function(){return e.important(l.todoId)}},o.a.createElement("i",{className:"far fa-star"})))))))})),y=Object(r.b)((function(e){return{todoList:e.todoList}}))((function(e){return o.a.createElement("div",null,e.todoList.map((function(e){return o.a.createElement(v,{key:e.todoId,todo:e})})))})),k={todoDelete:function(e){return e.deleteAll?function(t){t({type:"TODO_TASK_DELETE_ALL",payload:e.deleteAll})}:function(t){t({type:"TODO_TASK_DELETE",payload:e.id})}},todoTaskDeleteCancel:function(){return function(e){e({type:"TODO_TASK_DELETE_CANCEL"})}}},I=Object(r.b)((function(e){return{todoList:e.todoList,deleteTaskInfo:e.todoTaskForDelete,deleteAllTasksConfirmed:e.clearTodoList,modal:e.deleteConfirmationModal}}),k)((function(e){return o.a.createElement(f.a,{isOpen:Boolean(e.deleteTaskInfo.name)||e.deleteAllTasksConfirmed,toggle:e.todoTaskDeleteCancel},o.a.createElement(b.a,{className:"text-danger"},e.modal.header),o.a.createElement(E.a,null,o.a.createElement("strong",null,e.deleteTaskInfo.name)," ",e.modal.body),o.a.createElement(p.a,null,o.a.createElement(D.a,{color:"danger",onClick:function(){return e.todoDelete({id:e.deleteTaskInfo.id,deleteAll:e.deleteAllTasksConfirmed})}},"Delete"),o.a.createElement(D.a,{onClick:e.todoTaskDeleteCancel},"Cancel")))})),j=a(20),_=a(15),g=(a(83),Object(r.b)((function(e){return{todoList:e.todoList}}))((function(e){return o.a.createElement("div",{className:"mt-5"},e.todoList.filter((function(e){return!0===e.isImportant})).map((function(e){return o.a.createElement(v,{key:e.todoId,todo:e})})))})));function h(){return o.a.createElement("div",{className:"App"},o.a.createElement("br",null),o.a.createElement("h1",{align:"left",className:"p-2"}," To Do List "),o.a.createElement(m,null),o.a.createElement(N,null),o.a.createElement(y,null),o.a.createElement(I,null))}var w=function(){return o.a.createElement(j.a,null,o.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top bg-dark"},o.a.createElement("div",{className:""},o.a.createElement("ul",{className:"nav flex-row"},o.a.createElement("li",{className:"nav-item mr-3"},o.a.createElement(j.b,{to:"/"},"To Do")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(j.b,{to:"/important"},"Important Tasks"))))),o.a.createElement(_.c,null,o.a.createElement(_.a,{path:"/important"},o.a.createElement(g,{className:"m-5"})),o.a.createElement(_.a,{path:"/"},o.a.createElement(h,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(16),A=a(43),x=a(44),B=a(12),M=a(5),S={todoList:[{todoId:201,todoName:"todo 1",isDone:!1,isEdit:!1,isImportant:!1,isDisabledButtonUp:!0,isDisabledButtonDown:!1},{todoId:202,todoName:"todo 2",isDone:!1,isEdit:!1,isImportant:!0,isDisabledButtonUp:!1,isDisabledButtonDown:!1},{todoId:203,todoName:"todo 3",isDone:!1,isEdit:!1,isImportant:!1,isDisabledButtonUp:!1,isDisabledButtonDown:!1},{todoId:204,todoName:"todo 4",isDone:!1,isEdit:!1,isImportant:!1,isDisabledButtonUp:!1,isDisabledButtonDown:!0}],deleteConfirmationModal:{header:"Delete Task",body:" will be permanently deleted"},todoTaskForDelete:{id:"",name:""},clearTodoList:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TODO_DONE":return Object(M.a)({},e,{todoList:Object(B.a)(e.todoList.map((function(e){return e.todoId===t.payload?Object(M.a)({},e,{isDone:!e.isDone}):Object(M.a)({},e)})))});case"TODO_IMPORTANT":return Object(M.a)({},e,{todoList:Object(B.a)(e.todoList.map((function(e){return e.todoId===t.payload?Object(M.a)({},e,{isImportant:!e.isImportant}):Object(M.a)({},e)})))});case"TODO_EDIT":return Object(M.a)({},e,{todoList:Object(B.a)(e.todoList.map((function(e){return e.todoId===t.payload?Object(M.a)({},e,{isEdit:!e.isEdit}):Object(M.a)({},e)})))});case"TODO_ADD":return Object(M.a)({},e,{todoList:[].concat(Object(B.a)(P(Object(B.a)(e.todoList))),[{todoId:F(204,1e3),todoName:t.payload,isDone:!1,isEdit:!1,isImportant:!1,isDisabledButtonUp:!1,isDisabledButtonDown:!0}])});case"TODO_LOAD":return Object(M.a)({},e,{todoList:[].concat(Object(B.a)(P(Object(B.a)(e.todoList))),Object(B.a)(t.payload.map((function(e){return{todoId:e.id,todoName:e.title,isDone:e.completed,isEdit:!1,isImportant:!1,isDisabledButtonUp:!1,isDisabledButtonDown:!1}}))))});case"TODO_TASK_CONFIRM_DELETE":return Object(M.a)({},e,{todoTaskForDelete:t.payload,deleteConfirmationModal:S.deleteConfirmationModal});case"TODO_LIST_CONFIRM_DELETE_ALL":return Object(M.a)({},e,{clearTodoList:!0,deleteConfirmationModal:{header:"Delete Tasks",body:"All tasks will be permanently deleted"}});case"TODO_TASK_DELETE":return Object(M.a)({},e,{todoList:e.todoList.filter((function(e){return e.todoId!==t.payload})),todoTaskForDelete:S.todoTaskForDelete});case"TODO_TASK_DELETE_ALL":return Object(M.a)({},e,{todoList:[],todoTaskForDelete:S.todoTaskForDelete,clearTodoList:!1});case"TODO_TASK_DELETE_CANCEL":return Object(M.a)({},e,{todoTaskForDelete:S.todoTaskForDelete,clearTodoList:!1});case"TODO_UP":return Object(M.a)({},e,{todoList:K(Object(B.a)(e.todoList),t.payload)});case"TODO_DOWN":return Object(M.a)({},e,{todoList:R(Object(B.a)(e.todoList),t.payload)});default:return e}};function F(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}function K(e,t){var a=e.findIndex((function(e){return e.todoId===t}));if(a>0){var n=Object(B.a)(e);return n.splice(a,1),n.splice(a-1,0,e[a]),1===a?(n[0].isDisabledButtonUp=!0,n[1].isDisabledButtonUp=!1):a===n.length-1&&(n[a-1].isDisabledButtonDown=!1,n[a].isDisabledButtonDown=!0),n}}function R(e,t){var a=e.findIndex((function(e){return e.todoId===t}));if(a<e.length-1){var n=Object(B.a)(e);return n.splice(a,1),n.splice(a+1,0,e[a]),0===a?(n[0].isDisabledButtonUp=!0,n[1].isDisabledButtonUp=!1):a===n.length-2&&(n[a].isDisabledButtonDown=!1,n[a+1].isDisabledButtonDown=!0),n}}function P(e){return e.map((function(t){return e.findIndex((function(e){return e.todoId===t.todoId}))===e.length-1?Object(M.a)({},t,{isDisabledButtonDown:!1}):Object(M.a)({},t)}))}var W=Object(C.createStore)(U,Object(x.composeWithDevTools)(Object(C.applyMiddleware)(A.a)));c.a.render(o.a.createElement(r.a,{store:W},o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.adcf9430.chunk.js.map