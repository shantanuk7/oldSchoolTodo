let todoItem, domTodoList;
let todoList=[];

//listening for button click for capturing the input.
document.getElementById("btn").addEventListener("click", addTodo);

function deleteTodo(id) {
    todoItem = document.getElementById(id);
    console.log(todoItem);

    const todoList = document.getElementById("todoList");
    todoList.removeChild(todoItem);
}

function addTodo() {
    const dateId = Date.now().toString();
    
    todoItem = {
        id: dateId,
        item: document.getElementById("input").value,
    };

    todoList.push(todoItem);

    domTodoList = document.getElementById("todoList");

    //creating the actual item to be appended in the list
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-item");
    todoDiv.setAttribute("id",dateId);
    todoDiv.textContent = todoItem.item;

    //adding delete button to the list item div
    const deleteTodoBtn = document.createElement("button");
    deleteTodoBtn.setAttribute("id","deleteTodoBtn");
    deleteTodoBtn.innerHTML = "Delete";
    
    //adding event listener to the button while appending itself
    //passing its own dateId as parameter for the delete function.
    deleteTodoBtn.addEventListener("click", ()=>{
        deleteTodo(dateId); 
    })

    todoDiv.appendChild(deleteTodoBtn);
    domTodoList.appendChild(todoDiv);

    console.log(todoItem);
}