let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");

let todoList = [{
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JavaScript",
        uniqueNo: 3
    }
];
let todoCounts = todoList.length;

function onAddTodo() {
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;
    if (userInputValue === "") {
        alert("Please Enter Valid Input")
        return
    }
    todoCounts = todoCounts + 1
    let newTodo = {
        text: userInputValue,
        uniqueNo: todoCounts
    }
    createAndAppendTodo(newTodo)
}


addTodoButton.onclick = function() {
    onAddTodo();
}

function onTodoStatusChange(checkBoxid, labelId) {
    let checkBoxElement = document.getElementById(checkBoxid);
    let labelElement = document.getElementById(labelId);
    console.log(checkBoxElement.checked);
    if (checkBoxElement.checked === true) {
        labelElement.classList.add("checked");
    } else {
        labelElement.classList.remove("checked");
    }
}

function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
}


function createAndAppendTodo(todo) {
    let todoId = "todo" + todo.uniqueNo;
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    let checkBoxid = "checkBox" + todo.uniqueNo;
    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkBoxid;
    inputElement.classList.add("checkbox-input");

    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelId = "label" + todo.uniqueNo;
    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkBoxid);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelElement.id = labelId;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);


    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIcon);
    deleteIcon.onclick = function() {
        onDeleteTodo(todoId);
    }
    inputElement.onclick = function() {
        onTodoStatusChange(checkBoxid, labelId);
    }
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}