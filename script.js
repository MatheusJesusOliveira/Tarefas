document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Função para criar uma nova tarefa
    function createTaskItem(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });
        
        li.appendChild(deleteButton);
        return li;
    }

    // Adicionar tarefa
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskItem = createTaskItem(taskText);
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    });

    // Permitir adicionar tarefa ao pressionar Enter
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});