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
