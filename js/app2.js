const BTN_TOGGLE_FORM = document.querySelector(".toggleForm");
const TODO_FORM = document.querySelector(".todo-form");
const COUNT = document.querySelector(".counter");


TODO_FORM.addEventListener('submit', function(event){
 event.preventDefault();

 const todos = JSON.parse(localStorage.getItem('todos')) || [];
 console.log('tttt', todos)

 let inputTextDodo = document.getElementById('task').value;
 let inputDateDoto = document.getElementById('due-date').value;

 const newTodo = { name: inputTextDodo, date: inputDateDoto };

 todos.push(newTodo);

 localStorage.setItem('todos',JSON.stringify(todos))

 TODO_FORM.reset()

renderTodo();
 
})

function renderTodo(){ 
    let ul =document.querySelector('.todo-list');

    ul.innerHTML = '';

    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    todos.forEach((todo,index)=>{
        console.log(index)
        let liTodo = document.createElement('li');
        liTodo.className = 'todo-item';
        let spanText = document.createElement('span')
        spanText.innerHTML = `${todo.name} — ${todo.date}`;
        liTodo.append(spanText);
        let spanBtn = document.createElement('span');
        spanBtn.innerHTML = "✖";
        spanBtn.className = "delete-btn";
        spanBtn.addEventListener('click', function(){
           deleteTodo(index)
        })
        liTodo.append(spanBtn);
        ul.append(liTodo);
        }
    )
    getTotalTodos();
    toggleReminder();
    filterAllTodos();
}


// supprimer un todo
function deleteTodo(index) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.splice(index, 1); 
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodo(); // 

}


function deleteAllTodos(){ 
    document.querySelector('.clear-all').addEventListener('click',function(){
        localStorage.removeItem('todos');
        renderTodo();
    })
   
   
}

// récupérer le compteur de todo
function getTotalTodos() {
    let nbrTodos = document.querySelectorAll(".todo-item").length;
    COUNT.innerHTML = nbrTodos;

}

// Ajouter/supprimer un rappel sur un todo
function toggleReminder() {

    let listTodos = document.querySelectorAll(".todo-item");

    listTodos.forEach(function(todo) {
        todo.addEventListener("dblclick", function() {
            todo.classList.toggle("reminder");
        });
    });

}

function filterAllTodos(){
    let btnFilter = document.querySelector(".reminder-all");
    let lisTodoItems = document.querySelectorAll(".todo-item ");

    btnFilter.addEventListener('click', function(){
        lisTodoItems.forEach((todo)=>{
            if(todo.classList.contains("reminder")){
                todo.remove()
            } 
        }
        )
        getTotalTodos();
    })
}

// Afficher/faire disparaitre le formulaire
function toggleShowForm() {

    BTN_TOGGLE_FORM.addEventListener("click", function() {

        TODO_FORM.classList.toggle("hide");

        if(TODO_FORM.classList.contains("hide")) {
            // chager de couleur le bouton
            // changer le texte
            this.classList.toggle("bg-green");
            this.innerHTML = "Afficher";
        } else {
            this.classList.toggle("bg-green");
            this.innerHTML = "Cacher"; 
        }

    });

}

window.addEventListener('load', function() {
    localStorage.clear(); 
    renderTaskList(); 
});




