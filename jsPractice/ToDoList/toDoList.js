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

const form = document.getElementById("submitForm");
const emails = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const age = parseInt(document.getElementById("age").value);

  if (age < 18) {
    alert("18+ event");
    return;
  }

  if (emails.includes(email)) {
    alert("email taken");
    return;
  }
  emails.push(email);

  const res = document.getElementById("results");

  res.innerHTML += "<p>";
  res.innerHTML += `${firstName} - ${lastName}, ${age}-yo, email is ${email}`;
  res.innerHTML += "</p>";
});
