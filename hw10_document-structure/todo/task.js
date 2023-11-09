const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const taskAdd = document.getElementById('tasks__add');


function addTask(text) {
    taskList.insertAdjacentHTML('beforeend',
        `<div class="task">
            <div class="task__title">${text}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>`);


    const task = taskList.lastChild;
    const taskRemove = task.querySelector('.task__remove');
    
    taskRemove.onclick = () => {
        delTask(task);
        return false;
    }
        

}

function delTask(task) {
    task.remove();
}

taskAdd.onclick = () => {
    console.log(taskInput.value.trim())
    if (taskInput.value.trim() !== '') addTask(taskInput.value);
    taskInput.value = '';
    return false;
}