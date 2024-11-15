const BTN_TOGGLE_FORM = document.querySelector(".toggleForm");
const TODO_FORM = document.querySelector(".todo-form");
const COUNT = document.querySelector("#count");


// permet de créer un todo
function createTodo() {

}

// supprimer un todo
function deleteTodo() {

    let listDeleteBtn = document.querySelectorAll(".delete-btn");

    listDeleteBtn.forEach(function(deleteBtn) {
        deleteBtn.addEventListener("click", function() {
            this.parentElement.remove(); // supprimer le li du bouton sur lequel j'ai cliqué
            getTotalTodos();
        });
    });

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

function deleteAllTodos() {

}

function filterTodos() {

}


toggleShowForm();
toggleReminder();
getTotalTodos();
deleteTodo();