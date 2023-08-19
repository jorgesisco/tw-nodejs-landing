const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const hero = document.getElementById("her");

btn.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevents the event from being propagated to outer elements (like document)

  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  // Check if the click was outside the menu and the button
  if (!nav.contains(e.target) && !btn.contains(e.target)) {
    btn.classList.remove("open");
    nav.classList.add("hidden");
    nav.classList.remove("flex");
  }
});
