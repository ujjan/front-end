
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');



loadEventListners();

function loadEventListners(){

    // DOM Load Event Listner
    document.addEventListener('DOMContentLoaded', getTasksFromStorage);
    // ADD TASKS
    form.addEventListener('submit', addTask);

    //Remove Single Item
    taskList.addEventListener('click', removerItem);

    // Remove All Tasks

    clearBtn.addEventListener('click', cleartasks);

    //Filter the tasks

    filter.addEventListener('keyup', filterTasks)

}

function getTasksFromStorage(){

    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        creatLi(task);

    });
}


function addTask(e){

    if(taskInput.value === ''){
        alert('Please Add Task');
    }else{

        creatLi(taskInput.value);
        addTaskToLocalStorage(taskInput.value);
        taskInput.value = '';

        

    }

    e.preventDefault();
}


// creating the lis

function creatLi(task){
    const li = document.createElement('li');
    li.className= 'collection-item';
    li.appendChild(document.createTextNode(task));
    const link = document.createElement('a');
    link.className= 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
}



// add task to local storage!

function addTaskToLocalStorage(task){

    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}




function removerItem(e){

    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are Yuo Sure?')){
        e.target.parentElement.parentElement.remove();

        //Remove item from local Storage
        removeFromLocalS(e.target.parentElement.parentElement);
        }
    }
}
function removeFromLocalS(taskItem){

    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks= JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// clear tasks
function cleartasks(){

    while(taskList.firstChild){

        taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();

}


// filter the tasks

function filterTasks(e){

    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){

        const item = task.firstChild.textContent;

        if(item.toLocaleLowerCase().indexOf(text) != -1){

            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    });

}