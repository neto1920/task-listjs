// Função que adiciona tarefa
function addTask(){

    // Titulo da Tarefa
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle){

        // Clonar template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        // adiciona titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        // remover as classes desnecesárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // adiciona tarefa na lista
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

        // Adicionar o evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        });

        // botão de tarefa concluida
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this);
        });

        // limpar texto
        document.querySelector("#task-title").value = "";
    }
}

// Função de remover tarefas
function removeTask(task){
    task.parentNode.remove(true);
};

// função de tarefa concluida

function completeTask(task){
    const taskToComplete = task.parentNode;
    
    taskToComplete.classList.toggle("done");
};

// Evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){

    e.preventDefault();

    addTask();
    
});