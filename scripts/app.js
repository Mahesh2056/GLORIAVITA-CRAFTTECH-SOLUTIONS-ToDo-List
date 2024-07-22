document.addEventListener("DOMContentLoaded", function() {
    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    todoForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            addTodoItem(todoText);
            todoInput.value = "";
        }
    });

    function addTodoItem(todoText) {
        const li = document.createElement("li");
        li.innerHTML = `<span>${todoText}</span>
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>`;
        
        todoList.appendChild(li);

        const deleteButton = li.querySelector(".delete-btn");
        deleteButton.addEventListener("click", function() {
            li.remove();
        });

        const editButton = li.querySelector(".edit-btn");
        editButton.addEventListener("click", function() {
            const newText = prompt("Edit todo:", todoText);
            
            if (newText !== null) {
                li.querySelector("span").textContent = newText;
            }
        });
    }
});