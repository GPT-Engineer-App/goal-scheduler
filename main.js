const todoInput = document.getElementById("new-todo");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", addTodo);

function addTodo() {
  const todoText = todoInput.value;
  if (todoText) {
    const li = document.createElement("li");
    li.innerHTML = `
            <div class="flex items-center py-2 border-b">
                <input type="checkbox" class="mr-2">
                <span class="flex-grow">${todoText}</span>
                <button class="text-red-500 hover:text-red-600 ml-2">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    todoList.appendChild(li);
    todoInput.value = "";

    const checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.addEventListener("change", () => {
      li.classList.toggle("line-through");
    });

    const deleteBtn = li.querySelector("button");
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });
  }
}
