let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const bar = document.getElementById("bar");
const display = document.getElementById("displaytasks");

window.onload = () => {
  displayTasks();
};

function entertask() {
  const task = bar.value.trim().toLowerCase(); 

  if (tasks.includes(task)) {
    showmessage("Task already exists");
  } else {
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    bar.value = "";
    displayTasks();
  }
}

function deletetask() {
  const task = bar.value.trim().toLowerCase(); 

  if (tasks.includes(task)) {
    const del = tasks.findIndex(t => t.toLowerCase() === task); 
    tasks.splice(del, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    bar.value = "";
    displayTasks();
  } else {
    showmessage("Task does not exist");
  }
}

function searchtask() {
  const task = bar.value.trim().toLowerCase();

  const index = tasks.findIndex(t => t.toLowerCase() === task);

  if (index !== -1) {
    showmessage("Task does exist");
    display.innerHTML = `<p>${tasks[index]}</p>`;
  } else {
    showmessage("Task does not exist");
  }
}

function displayTasks() {
  if (tasks.length) {
    display.innerHTML = tasks.map(task => `<p>${task}</p>`).join("");
  } else {
    display.innerHTML = "<p>No tasks added yet.</p>";
  }
}

function showmessage(msg) {
  display.innerHTML = `<p style="color: red;"><em>${msg}</em></p>`;
}
