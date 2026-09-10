const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    themeToggle.textContent = "Dark Mode";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggle.textContent = "Light Mode";
  }
});

//Project card
const projectImageButtons = document.querySelectorAll(".project-image-button");

projectImageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".project-card");
    card.classList.toggle("expanded");
  });
});
