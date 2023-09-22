let taskInput = document.querySelector(".input input");
let button = document.querySelector(".btn button");
let divTasks = document.querySelector(".items");
let span = document.querySelector("span");
let edit = document.querySelector(".btn-success");
let input = document.querySelector(".row2 .h2 input");

let AllTasks = [];
let renderTask = () =>{
    let value = taskInput.value
    if (value.trim() == ''){
        alert("please enter valid data!")
    }else{
        singleTask ={
            task : value.trim(),
        };
        AllTasks.push(singleTask)
        taskInput.value ="";
        readTasks();
        console.log(AllTasks);
    }
};

let deleteTask =(index) =>{
    AllTasks.splice(index, 1);
    readTasks();
};

let readTasks = () =>{
    divTasks.innerHTML ="";
    span.innerText = AllTasks.length;
    AllTasks.forEach((element, index) => {
        divTasks.innerHTML +=`
        <div class="row2">
            <div class="h2">
                <input type="text" value="${element.task}" readonly>
            </div>
            <div class="btns">
                <button onclick="updatetask(${index})" class="btn-success"> Edit</button>
                <button onclick="deleteTask(${index})" class="btn-danger"> Delete</button>
            </div>
        </div>
        `;
    });
};


let updatetask= (id)=>{   
    const taskElement = document.querySelectorAll(".row2 .h2 input")[id];
    const editbtn = document.querySelectorAll(".btn-success")[id];
  
  if (editbtn.innerText == "Edit") {
    taskElement.removeAttribute("readonly");
    taskElement.focus();
    editbtn.innerText = "Save";
  } else {
    taskElement.setAttribute("readonly", "readonly");
    editbtn.innerText = "Edit";

    const updatedTask = taskElement.value.trim();

    if (id >= 0 && id < AllTasks.length) {
      AllTasks[id].task = updatedTask;
    }
   
  }
};

button.addEventListener("click" , renderTask);
edit.addEventListener('click',updatetask);


