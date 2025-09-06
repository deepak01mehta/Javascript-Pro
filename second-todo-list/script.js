let output = document.getElementById("input");
let btn = document.getElementById("add");
let result = document.getElementById("result");
let modal = document.getElementById("model");
let modalInput = document.getElementById("modal-input");
let save = document.getElementById("save");
let cencel = document.getElementById("cencel");

let currentTaskSpan = null;
let editingTaskId=null

let memory = JSON.parse(localStorage.getItem("todo")) || [];

function saveToLocalStorage() {
  localStorage.setItem("todo", JSON.stringify(memory));
}

function openModel(currentText, spanElement, id) {
  modal.classList.remove("hidden");
  modalInput.value = currentText;
  modalInput.focus();
  currentTaskSpan = spanElement;
  editingTaskId=id
}
function closeModel() {
  modal.classList.add("hidden");
  modalInput.value = "";
  currentTaskSpan = null;
}


function renderTask(){
  result.innerHTML = "";
  
  memory.forEach(taskObj => {
  let task =document.createElement("div");
  const taskContent=document.createElement("span");
  taskContent.textContent=taskObj.title;

  const editBtn=document.createElement("button");
  editBtn.textContent="Edit";
  editBtn.style.marginLeft="10px";


  const deletebtn=document.createElement("button");
  deletebtn.textContent="Delete";
  deletebtn.style.marginLeft="10px";


  editBtn.addEventListener("click",()=>{
    openModel(taskContent.textContent,taskContent,taskObj.id);
  });

  deletebtn.addEventListener("click",()=>{
    memory=memory.filter(t=>t.id !==taskObj.id)
    saveToLocalStorage();
    renderTask();
  });

  task.appendChild(taskContent);
  task.appendChild(editBtn);
  task.appendChild(deletebtn);

  result.appendChild(task);
});

}

btn.addEventListener("click",()=>{
  let tasktext=output.value.trim();
  if(tasktext===""){
    alert("please enter a task")
    return;
  }
  memory.push({id:Date.now(),title:tasktext,comleted:false});
  saveToLocalStorage()
  renderTask();
  output.value="";
})


save.addEventListener("click", () => {
  const newText = modalInput.value.trim();

  if (newText && currentTaskSpan) {
    currentTaskSpan.textContent = newText;

   memory=memory.map(task=>
    task.id ===editingTaskId ?{...task,title:newText} :task
   );
   saveToLocalStorage();
   closeModel();
  }
  else{
    alert("Task cannot be empty")
  }
  
});

cencel.addEventListener("click", closeModel);

document.addEventListener("DOMContentLoaded", renderTask);



