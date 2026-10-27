
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

function addTask() {
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        taskInput.focus();
        return;
    }

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.setAttribute("aria-label", "Mark task complete");

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskValue;

    checkbox.addEventListener("change", function () {
        span.classList.toggle("completed", checkbox.checked);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.setAttribute("type", "button");

    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateMessage();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
    updateMessage();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function updateMessage() {
    emptyMessage.style.display = taskList.children.length === 0 ? "block" : "none";
}

updateMessage();
