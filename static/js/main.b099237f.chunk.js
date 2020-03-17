(this["webpackJsonpreact-redux-pasv-todo-list-app"]=this["webpackJsonpreact-redux-pasv-todo-list-app"]||[]).push([[0],{46:function(e,t,a){e.exports=a(86)},51:function(e,t,a){},52:function(e,t,a){},74:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(14),c=a.n(l),s=(a(51),a(52),a(7)),i=a(41),r=a.n(i);function d(e){return function(t){t({type:"TODO_DONE",payload:e})}}function m(e){return function(t){t({type:"TODO_IMPORTANT",payload:e})}}function u(e){return function(t){t({type:"TODO_EDIT",payload:e})}}function f(e){return function(t){t({type:"TODO_UNDO_EDIT",payload:e})}}function b(e){return function(t){t({type:"TODO_TASK_CONFIRM_DELETE",payload:e})}}var E={clearList:function(){return function(e){e({type:"TODO_LIST_CONFIRM_DELETE_ALL"})}},loadExternalTasks:function(){return function(e){r.a.get("https://jsonplaceholder.typicode.com/todos").then((function(t){e({type:"TODO_LOAD",payload:t.data})})).catch((function(e){console.log(e)}))}}},p=Object(s.b)((function(e){return{todoList:e.todoList}}),E)((function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"card  m-2 border-0"},o.a.createElement("div",{className:"card-body p-0 "},o.a.createElement("div",{className:"d-flex flex-row justify-content-start align-items-center"},o.a.createElement("div",{className:"col-sm-1 pl-0 "},o.a.createElement("strong",null,"Total:")),o.a.createElement("div",{className:"col-sm-2 d-flex pl-0"},e.todoList.length),o.a.createElement("div",{className:"col-sm-2.5 align-items-center"},o.a.createElement("button",{className:"col-sm btn btn-warning",onClick:e.loadExternalTasks},"Add external list")),o.a.createElement("div",{className:"col-sm-2 align-items-center"},o.a.createElement("button",{className:"col-sm btn btn-danger ",onClick:e.clearList},"Clear list"))))))})),D=a(16),O=(a(74),a(91)),N=a(87),T=a(88),v=a(89),L=a(90),I=function(e){return o.a.createElement(O.a,{isOpen:e.isEmptyTask,toggle:e.onSubmit},o.a.createElement(N.a,{className:"text-danger"},"Task is empty"),o.a.createElement(T.a,null,"Please add your task"),o.a.createElement(v.a,null,o.a.createElement(L.a,{onClick:e.onSubmit},"Ok")))},y={todoAdd:function(e){return function(t){t({type:"TODO_ADD",payload:e})}}},k=Object(s.b)((function(e){return{todoList:e.todoList}}),y)((function(e){var t=Object(n.useState)(""),a=Object(D.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(!1),i=Object(D.a)(s,2),r=i[0],d=i[1];return o.a.createElement("div",null,o.a.createElement("div",{className:"card  m-2"},o.a.createElement("div",{className:"card-body p-0"},o.a.createElement("div",{className:"d-flex flex-row justify-content-end align-items-center"},o.a.createElement("div",{className:"col-sm-9 "},o.a.createElement("input",{className:"input-group border-0",onChange:function(e){return c(e.target.value)},value:l,placeholder:"add new task"})),o.a.createElement("div",{className:"col-sm-2 align-items-center pr-1"},o.a.createElement("button",{className:"col-sm btn btn-success ",onClick:function(){return function(t){""===t?d(!0):(e.todoAdd(t),d(!1),c(""))}(l)}},"Add"))))),o.a.createElement(I,{isEmptyTask:r,onSubmit:function(){return d(!1)}}))})),j=(a(82),{done:d,important:m,edit:u,undo:f,deleteTaskInfo:b,todoMoveUp:function(e){return function(t){t({type:"TODO_UP",payload:e})}},todoMoveDown:function(e){return function(t){t({type:"TODO_DOWN",payload:e})}}}),g=Object(s.b)((function(e){return{todoList:e.todoList}}),j)((function(e){var t,a,l,c=e.todo,s=Object(n.useState)(c.todoName),i=Object(D.a)(s,2),r=i[0],d=i[1];c.isDone?(t="fa-check-circle",a="done"):(t="fa-circle",a=""),l=c.isImportant?"important":"";return o.a.createElement("div",null,o.a.createElement("div",{className:"card  m-2"},o.a.createElement("div",{className:"card-body p-0"},o.a.createElement("div",{className:"d-flex flex-row justify-content-between align-items-center green"},o.a.createElement("div",{className:"col-sm-0.5 p-2 position-left"},o.a.createElement("i",{className:"text-success p-2 position-left far ".concat(t)})),o.a.createElement("div",{className:"col-sm-0.5 btn-group-vertical btn-sm"},o.a.createElement("button",{className:"btn btn-secondary btn-sm",disabled:c.isDisabledButtonUp,onClick:function(){return e.todoMoveUp(c.todoId)}},o.a.createElement("i",{className:"fas fa-sort-up"})),o.a.createElement("button",{className:"btn btn-secondary btn-sm",disabled:c.isDisabledButtonDown,onClick:function(){return e.todoMoveDown(c.todoId)}},o.a.createElement("i",{className:"fas fa-sort-down"}))),o.a.createElement("div",{className:"col-sm-9 "},!c.isEdit&&o.a.createElement("input",{type:"text",className:"form-control border-0 ".concat(a," ").concat(l),value:c.todoName,disabled:!0}),c.isEdit&&o.a.createElement("input",{type:"text",className:"form-control edit  ".concat(a," ").concat(l),value:r,disabled:!1,onChange:function(e){return d(e.target.value)},autoFocus:!0})),o.a.createElement("div",{className:"col-sm-2 d-flex flex-row align-items-center"},!c.isEdit&&o.a.createElement("button",{className:"col-sm-3 btn btn-success mr-1",onClick:function(){return e.done(c.todoId)}},o.a.createElement("i",{className:"far fa-check-square"})),c.isEdit&&o.a.createElement("button",{className:"col-sm-3 btn btn-outline-info mr-1 ",onClick:function(){return t=c.todoId,e.undo(t),void d(c.todoName);var t}},o.a.createElement("i",{className:"fas fa-undo"})),o.a.createElement("button",{className:"col-sm-3 btn btn-info mr-1 ",onClick:function(){return e.edit({id:c.todoId,name:r})}},!c.isEdit&&o.a.createElement("i",{className:"fas fa-edit"}),c.isEdit&&o.a.createElement("i",{className:"far fa-save"})),!c.isEdit&&o.a.createElement("button",{className:"col-sm-3 btn btn-danger mr-1",onClick:function(){return e.deleteTaskInfo({id:c.todoId,name:c.todoName})}},o.a.createElement("i",{className:"far fa-trash-alt"})),!c.isEdit&&o.a.createElement("button",{className:"col-sm-3 btn btn-warning",onClick:function(){return e.important(c.todoId)}},o.a.createElement("i",{className:"fas fa-exclamation"})))))))})),h=Object(s.b)((function(e){return{todoList:e.todoList}}))((function(e){return o.a.createElement("div",null,e.todoList.map((function(e){return o.a.createElement(g,{key:e.todoId,todo:e})})))})),_={todoDelete:function(e){return e.deleteAll?function(t){t({type:"TODO_TASK_DELETE_ALL",payload:e.deleteAll})}:function(t){t({type:"TODO_TASK_DELETE",payload:e.id})}},todoTaskDeleteCancel:function(){return function(e){e({type:"TODO_TASK_DELETE_CANCEL"})}}},w=Object(s.b)((function(e){return{todoList:e.todoList,deleteTaskInfo:e.todoTaskForDelete,deleteAllTasksConfirmed:e.clearTodoList,modal:e.deleteConfirmationModal}}),_)((function(e){return o.a.createElement(O.a,{isOpen:Boolean(e.deleteTaskInfo.name)||e.deleteAllTasksConfirmed,toggle:e.todoTaskDeleteCancel},o.a.createElement(N.a,{className:"text-danger"},e.modal.header),o.a.createElement(T.a,null,o.a.createElement("strong",null,e.deleteTaskInfo.name)," ",e.modal.body),o.a.createElement(v.a,null,o.a.createElement(L.a,{color:"danger",onClick:function(){return e.todoDelete({id:e.deleteTaskInfo.id,deleteAll:e.deleteAllTasksConfirmed})}},"Delete"),o.a.createElement(L.a,{onClick:e.todoTaskDeleteCancel},"Cancel")))})),C=a(18),x=a(15),B=(a(83),a(84),{done:d,important:m,edit:u,undo:f,deleteTaskInfo:b}),A=Object(s.b)((function(e){return{todoList:e.todoList}}),B)((function(e){var t,a,l,c=e.todo,s=Object(n.useState)(c.todoName),i=Object(D.a)(s,2),r=i[0],d=i[1];c.isDone?(t="fa-check-circle",a="done"):(t="fa-circle",a=""),l=c.isImportant?"important":"";return o.a.createElement("div",null,o.a.createElement("div",{className:"card  m-2"},o.a.createElement("div",{className:"card-body p-0"},o.a.createElement("div",{className:"d-flex flex-row justify-content-between align-items-center green"},o.a.createElement("div",{className:"col-sm-0.5 p-2 position-left"},o.a.createElement("i",{className:"text-success p-2 position-left far ".concat(t)})),o.a.createElement("div",{className:"col-sm-9 "},!c.isEdit&&o.a.createElement("input",{type:"text",className:"form-control border-0 ".concat(a," ").concat(l),value:c.todoName,disabled:!0}),c.isEdit&&o.a.createElement("input",{type:"text",className:"form-control edit  ".concat(a," ").concat(l),value:r,disabled:!1,onChange:function(e){return d(e.target.value)},autoFocus:!0})),o.a.createElement("div",{className:"col-sm-2 d-flex flex-row align-items-center"},!c.isEdit&&o.a.createElement("button",{className:"col-sm-3 btn btn-success mr-1",onClick:function(){return e.done(c.todoId)}},o.a.createElement("i",{className:"far fa-check-square"})),c.isEdit&&o.a.createElement("button",{className:"col-sm-3 btn btn-outline-info mr-1 ",onClick:function(){return t=c.todoId,e.undo(t),void d(c.todoName);var t}},o.a.createElement("i",{className:"fas fa-undo"})),o.a.createElement("button",{className:"col-sm-3 btn btn-info mr-1 ",onClick:function(){return e.edit({id:c.todoId,name:r})}},!c.isEdit&&o.a.createElement("i",{className:"fas fa-edit"}),c.isEdit&&o.a.createElement("i",{className:"far fa-save"})),!c.isEdit&&o.a.createElement("button",{className:"col-sm-3 btn btn-danger mr-1",onClick:function(){return e.deleteTaskInfo({id:c.todoId,name:c.todoName})}},o.a.createElement("i",{className:"far fa-trash-alt"})),!c.isEdit&&o.a.createElement("button",{className:"col-sm-3 btn btn-warning",onClick:function(){return e.important(c.todoId)}},o.a.createElement("i",{className:"fas fa-exclamation"})))))),o.a.createElement(w,null))})),U=Object(s.b)((function(e){return{todoList:e.todoList}}))((function(e){return o.a.createElement("div",{className:"mt-5"},e.todoList.filter((function(e){return!0===e.isImportant})).map((function(e){return o.a.createElement(A,{key:e.todoId,todo:e})})))}));function M(){return o.a.createElement("div",{className:"App"},o.a.createElement("br",null),o.a.createElement("h1",{align:"left",className:"p-2"}," To Do List "),o.a.createElement(p,null),o.a.createElement(k,null),o.a.createElement(h,null),o.a.createElement(w,null))}var S=function(){return o.a.createElement(C.a,null,o.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top bg-dark"},o.a.createElement("div",{className:""},o.a.createElement("ul",{className:"nav flex-row"},o.a.createElement("li",{className:"nav-item mr-3"},o.a.createElement(C.b,{to:"/react-redux-pasv-todo-list-app"},"To Do")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(C.b,{to:"/react-redux-pasv-todo-list-app/important"},"Important Tasks"))))),o.a.createElement(x.c,null,o.a.createElement(x.a,{path:"/react-redux-pasv-todo-list-app/important"},o.a.createElement(U,{className:"m-5"})),o.a.createElement(x.a,{path:"/react-redux-pasv-todo-list-app"},o.a.createElement(M,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=a(17),K=a(43),R=a(44),P=a(9),W=a(5),q={todoList:[{todoId:201,todoName:"todo 1",isDone:!1,isEdit:!1,isImportant:!1,isDisabledButtonUp:!0,isDisabledButtonDown:!1},{todoId:202,todoName:"todo 2",isDone:!1,isEdit:!1,isImportant:!0,isDisabledButtonUp:!1,isDisabledButtonDown:!1},{todoId:203,todoName:"todo 3",isDone:!1,isEdit:!1,isImportant:!1,isDisabledButtonUp:!1,isDisabledButtonDown:!1},{todoId:204,todoName:"todo 4",isDone:!1,isEdit:!1,isImportant:!1,isDisabledButtonUp:!1,isDisabledButtonDown:!0}],deleteConfirmationModal:{header:"Delete Task",body:" will be permanently deleted"},todoTaskForDelete:{id:"",name:""},clearTodoList:!1},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TODO_DONE":return Object(W.a)({},e,{todoList:Object(P.a)(e.todoList.map((function(e){return e.todoId===t.payload?Object(W.a)({},e,{isDone:!e.isDone}):Object(W.a)({},e)})))});case"TODO_IMPORTANT":return Object(W.a)({},e,{todoList:Object(P.a)(e.todoList.map((function(e){return e.todoId===t.payload?Object(W.a)({},e,{isImportant:!e.isImportant}):Object(W.a)({},e)})))});case"TODO_EDIT":return Object(W.a)({},e,{todoList:Object(P.a)(e.todoList.map((function(e){return e.todoId===t.payload.id?Object(W.a)({},e,{isEdit:!e.isEdit,todoName:t.payload.name}):Object(W.a)({},e)})))});case"TODO_UNDO_EDIT":return Object(W.a)({},e,{todoList:Object(P.a)(e.todoList.map((function(e){return e.todoId===t.payload?(console.log("HERE"),Object(W.a)({},e,{isEdit:!e.isEdit})):Object(W.a)({},e)})))});case"TODO_ADD":return Object(W.a)({},e,{todoList:[].concat(Object(P.a)(G(Object(P.a)(e.todoList))),[0===Object(P.a)(e.todoList).length?{todoId:H(204,1e3),todoName:t.payload,isDone:!1,isEdit:!1,isImportant:!1,isDisabledButtonUp:!0,isDisabledButtonDown:!0}:{todoId:H(204,1e3),todoName:t.payload,isDone:!1,isEdit:!1,isImportant:!1,isDisabledButtonUp:!1,isDisabledButtonDown:!0}])});case"TODO_LOAD":return Object(W.a)({},e,{todoList:function(){var a=[].concat(Object(P.a)(G(Object(P.a)(e.todoList))),Object(P.a)(t.payload.map((function(e){return{todoId:e.id,todoName:e.title,isDone:e.completed,isEdit:!1,isImportant:!1,isDisabledButtonUp:!1,isDisabledButtonDown:!1}}))));return a[0].isDisabledButtonUp=!0,a[a.length-1].isDisabledButtonDown=!0,a}()});case"TODO_TASK_CONFIRM_DELETE":return Object(W.a)({},e,{todoTaskForDelete:t.payload,deleteConfirmationModal:q.deleteConfirmationModal});case"TODO_LIST_CONFIRM_DELETE_ALL":return Object(W.a)({},e,{clearTodoList:!0,deleteConfirmationModal:{header:"Delete Tasks",body:"All tasks will be permanently deleted"}});case"TODO_TASK_DELETE":return Object(W.a)({},e,{todoList:e.todoList.filter((function(e){return e.todoId!==t.payload})),todoTaskForDelete:q.todoTaskForDelete});case"TODO_TASK_DELETE_ALL":return Object(W.a)({},e,{todoList:[],todoTaskForDelete:q.todoTaskForDelete,clearTodoList:!1});case"TODO_TASK_DELETE_CANCEL":return Object(W.a)({},e,{todoTaskForDelete:q.todoTaskForDelete,clearTodoList:!1});case"TODO_UP":return Object(W.a)({},e,{todoList:$(Object(P.a)(e.todoList),t.payload)});case"TODO_DOWN":return Object(W.a)({},e,{todoList:z(Object(P.a)(e.todoList),t.payload)});default:return e}};function H(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}function $(e,t){var a=e.findIndex((function(e){return e.todoId===t})),n=Object(P.a)(e);return n.splice(a,1),n.splice(a-1,0,e[a]),2===e.length?(n[0].isDisabledButtonUp=!0,n[0].isDisabledButtonDown=!1,n[1].isDisabledButtonUp=!1,n[1].isDisabledButtonDown=!0):1===a?(n[0].isDisabledButtonUp=!0,n[1].isDisabledButtonUp=!1):a===n.length-1&&(n[a-1].isDisabledButtonDown=!1,n[a].isDisabledButtonDown=!0),n}function z(e,t){var a=e.findIndex((function(e){return e.todoId===t}));if(a<e.length-1){var n=Object(P.a)(e);return n.splice(a,1),n.splice(a+1,0,e[a]),2===e.length?(n[0].isDisabledButtonUp=!0,n[0].isDisabledButtonDown=!1,n[1].isDisabledButtonUp=!1,n[1].isDisabledButtonDown=!0):0===a?(n[0].isDisabledButtonUp=!0,n[1].isDisabledButtonUp=!1):a===n.length-2&&(n[a].isDisabledButtonDown=!1,n[a+1].isDisabledButtonDown=!0),n}}function G(e){return e.map((function(t){return e.findIndex((function(e){return e.todoId===t.todoId}))===e.length-1?Object(W.a)({},t,{isDisabledButtonDown:!1}):Object(W.a)({},t)}))}var Q=Object(F.createStore)(J,Object(R.composeWithDevTools)(Object(F.applyMiddleware)(K.a)));c.a.render(o.a.createElement(s.a,{store:Q},o.a.createElement(C.a,null,o.a.createElement(x.a,{path:"/",component:S}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.b099237f.chunk.js.map