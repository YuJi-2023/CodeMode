// part 1 update cart quantity
let toDoList = [];

renderTodolist();

function renderTodolist() {
  let todolistHTML = "";
  for (let i = 0; i < toDoList.length; i++) {
    todolistHTML += `
    <div>${toDoList[i].name}</div>
    <div>${toDoList[i].date}</div>
    <button class="delBtn" onclick="
    toDoList.splice(${i}, 1); renderTodolist();
    ">Delete</button>`;
  }
  document.querySelector(".js-todo-HTML").innerHTML = todolistHTML;
}

function addToDo() {
  let todoName = document.querySelector(".inputName");
  let todoDate = document.querySelector(".inputDate");
  toDoList.push({
    name: todoName.value,
    date: todoDate.value,
  });
  console.log(toDoList);

  todoName.value = "";
  todoDate.value = "";

  renderTodolist();
}
