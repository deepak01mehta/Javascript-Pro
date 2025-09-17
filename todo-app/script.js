let output = document.getElementById("input");
let btn = document.getElementById("add");
let result = document.getElementById("result");
let modal = document.getElementById("model");
let modalInput = document.getElementById("modal-input");
let save = document.getElementById("save");
let cencel = document.getElementById("cencel");

let currentTaskSpan = null;

function openModel(currentText, spanElement) {
  modal.classList.remove("hidden");
  modalInput.value = currentText;
  modalInput.focus();
  currentTaskSpan = spanElement;
}
function closeModel() {
  modal.classList.add("hidden");
  modalInput.value = "";
  currentTaskSpan = null;
}

//  Add new task
btn.addEventListener("click", () => {
  let tasktext = output.value.trim();

  if (tasktext !== "") {
    let task = document.createElement("div");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "10px";

    const taskContent = document.createElement("span");
    taskContent.textContent = tasktext;

    const editbtn = document.createElement("button");
    editbtn.textContent = "Edit";
    editbtn.style.marginLeft = "10px";

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.style.marginLeft = "10px";

    //  checkbox event
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        taskContent.style.textDecoration = "line-through";
        taskContent.style.color = "gray";
      } else {
        taskContent.style.textDecoration = "none";
        taskContent.style.color = "black";
      }
    });

    editbtn.addEventListener("click", () => {
      openModel(taskContent.textContent, taskContent);
    });
    deletebtn.addEventListener("click", () => {
      task.remove();
    });

    task.appendChild(checkbox);
    task.appendChild(taskContent);
    task.appendChild(editbtn);
    task.appendChild(deletebtn);

    result.appendChild(task);
  } else {
    alert("please enter a task");
  }

  output.value = "";
});

//  Save edited task
save.addEventListener("click", () => {
  const newText = modalInput.value.trim();

  if (newText && currentTaskSpan) {
    currentTaskSpan.textContent = newText;
    closeModel();
  } else {
    alert("Task cannot be empty");
  }
});

// ✅ Cancel edit
cencel.addEventListener("click", closeModel);
