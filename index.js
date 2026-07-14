// Your Genre Dropdown Code
const genreBtn = document.getElementById("genre-btn");
const genreMenu = document.getElementById("genre-menu");
const selectedGenre = document.getElementById("selected-genre");
const genreOptions = document.querySelectorAll(".genre-option");

// Open/Close dropdown
genreBtn.addEventListener("click", () => {
  genreMenu.classList.toggle("hidden");
});

// Select an option
genreOptions.forEach((option) => {
  option.addEventListener("click", () => {
    selectedGenre.textContent = option.textContent;
    selectedGenre.classList.remove("text-gray-500");
    selectedGenre.classList.add("text-gray-800");

    genreMenu.classList.add("hidden");
  });
});

// Close when clicking outside
document.addEventListener("click", (e) => {
  if (!genreBtn.contains(e.target) && !genreMenu.contains(e.target)) {
    genreMenu.classList.add("hidden");
  }
});

// ======================================
// Reading Tasks
// ======================================

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Add a new task
addTaskBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();

  if (task === "") return;

  const li = document.createElement("li");

  li.className = "flex items-center gap-3";

  li.innerHTML = `
    <input type="checkbox" class="task-checkbox w-5 h-5">
    <span>${task}</span>
  `;

  taskList.appendChild(li);

  taskInput.value = "";

  // Give the new checkbox the same behavior
  attachCheckbox(li.querySelector(".task-checkbox"));
});

// Function to strike through a task
function attachCheckbox(checkbox) {
  checkbox.addEventListener("change", () => {
    const text = checkbox.nextElementSibling;

    if (checkbox.checked) {
      text.classList.add("line-through", "text-gray-400");
    } else {
      text.classList.remove("line-through", "text-gray-400");
    }
  });
}

// Make the initial checkboxes work
document.querySelectorAll(".task-checkbox").forEach((checkbox) => {
  attachCheckbox(checkbox);
});
