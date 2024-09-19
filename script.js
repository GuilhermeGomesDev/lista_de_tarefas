// Referências aos elementos DOM
const taskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Função para adicionar uma nova tarefa
function addTask() {
    const taskText = taskInput.value.trim(); // Remover espaços desnecessários

    if (taskText !== '') {
        // Criar um novo item de lista
        const listItem = document.createElement('li');
        listItem.className = 'task-item';

        // Criar caixa de checagem
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleTaskCompletion);

        // Criar o elemento de texto da tarefa
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Criar o botão de exclusão
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.className = 'delete-task';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem); // Remove o item da lista
        });

        // Adicionar os elementos ao item da lista
        listItem.appendChild(checkbox);
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton); // Adiciona o botão de exclusão ao item

        // Adicionar o item à lista de tarefas
        taskList.appendChild(listItem);

        // Limpar o input após adicionar a tarefa
        taskInput.value = '';
    }
}

// Função para alternar o status de completado da tarefa
function toggleTaskCompletion(event) {
    const listItem = event.target.parentElement; // Obter o item da lista (pai)
    if (event.target.checked) {
        listItem.querySelector('span').classList.add('completed');
    } else {
        listItem.querySelector('span').classList.remove('completed');
    }
}

// Adicionar a tarefa ao clicar no botão
addTaskButton.addEventListener('click', addTask);

// Também permitir adicionar tarefa pressionando a tecla "Enter"
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});


// Função para alternar entre modo claro e escuro
function toggleTheme() {
    const body = document.body;
    const container = document.querySelector('.container');
    const themeLabel = document.getElementById('theme-label');

    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');

    themeLabel.textContent = body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
}

// Configura o switch de tema
document.getElementById('theme-switch').addEventListener('change', toggleTheme);
