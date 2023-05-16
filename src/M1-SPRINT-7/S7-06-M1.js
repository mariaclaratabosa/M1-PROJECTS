let tasks = [];

function addTask() {
    let taskName = document.getElementById("task-name").value;
    let taskType = document.getElementById("task-type").value;

    let task = { name: taskName, type: taskType };

    if (taskName === '' || taskType === '') {
        alert('Os campos devem ser preenchidos antes de adicionar a tarefa')
        return
    }
    tasks.push(task);
    tasks.sort((a, b) => {
        if (a.type === b.type) {
            return 0;
        }
        if (a.type === 'urgente') {
            return -1;
        }
        if (b.type === 'urgente') {
            return 1;
        }
        if (a.type === 'prioritario') {
            return -1;
        }
        if (b.type === 'prioritario') {
            return 1;
        }
        return 0;
    });
    updateTaskList();
}

function updateTaskList() {
    let taskList = document.getElementById('task-list')
    taskList.innerHTML = ''
    if (tasks.length === 0) {
        taskList.innerHTML = 'Nenhuma tarefa encontrada'
        return
    }
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i]
        let taskItem = document.createElement('li')
        taskItem.innerHTML = task.name
        taskItem.setAttribute('id', 'tarefa')
        if (task.type === 'urgente') {
            taskItem.classList.add('urgente')
        } if (task.type === 'prioritario') {
            taskItem.classList.add('prioritario')
        } if (task.type === 'normal') {
            taskItem.classList.add('normal')
        }
        taskList.appendChild(taskItem)
        let removeBtn = document.createElement('button')
        removeBtn.setAttribute('onclick', `removeTask(${i})`)
        removeBtn.setAttribute('class', 'remove-task')
        taskItem.appendChild(removeBtn)
        let btnImg = document.createElement('img')
        removeBtn.appendChild(btnImg)
    }
}

function removeTask(index) {
    tasks.splice(index, 1)
    updateTaskList()
}

function searchTasks() {
    let searchValue = document.getElementById('barra-pesquisa').value
    let filteredTasks = tasks.filter(task =>
        task.name.includes(searchValue))
    if (filteredTasks.length > 0) {
        updateTaskList(filteredTasks)
        alert('A tarefa foi encontrada')
    } else {
        alert('A tarefa não foi encontrada')
    }
}

document.getElementById('btn-pesquisar').addEventListener('click', searchTasks)
document.getElementById('barra-pesquisa').addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        searchTasks()
    }
})
